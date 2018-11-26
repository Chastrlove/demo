import * as React from "react";
import * as deepEquals from "react-fast-compare";

import {
  getDefaultFormState,
  retrieveSchema,
  setState,
  shouldRender,
  toIdSchema,
} from "../../silex-shared/src/utils";
import validateFormData, { toErrorList } from "../../silex-shared/src/validate";
import { default as DefaultErrorList } from "./ErrorList";
import { IFormProps, IFormState } from "./types";

export default class Form extends React.Component<IFormProps, IFormState> {
  public static defaultProps = {
    noValidate: false,
    uiSchema: {},
    liveValidate: false,
    safeRenderCompletion: false,
    noHtml5Validate: false,
    ErrorList: DefaultErrorList,
  };

  constructor(props) {
    super(props);
    this.state = this.getStateFromProps(props);

    if (this.props.onChange && !deepEquals(this.state.formData, this.props.formData)) {
      this.props.onChange(this.state);
    }
  }

  public componentWillReceiveProps(nextProps) {
    const nextState = this.getStateFromProps(nextProps);
    this.setState(nextState);
    if (!deepEquals(nextState.formData, nextProps.formData) && this.props.onChange) {
      this.props.onChange(nextState);
    }
  }

  public getStateFromProps(props) {
    const state = this.state || {};
    const schema = "schema" in props ? props.schema : this.props.schema;
    const uiSchema = "uiSchema" in props ? props.uiSchema : this.props.uiSchema;
    const edit = typeof props.formData !== "undefined";
    const liveValidate = props.liveValidate || this.props.liveValidate;
    const mustValidate = edit && !props.noValidate && liveValidate;
    const { definitions } = schema;
    const formData = getDefaultFormState(schema, props.formData, definitions);
    const retrievedSchema = retrieveSchema(schema, definitions, formData);

    const { errors, errorSchema } = mustValidate
      ? this.validate(formData, schema)
      : {
          errors: state.errors || [],
          errorSchema: state.errorSchema || {},
        };
    const idSchema = toIdSchema(
      retrievedSchema,
      uiSchema["ui$rootFieldId"],
      definitions,
      formData,
      props.idPrefix,
    );
    return {
      schema,
      uiSchema,
      idSchema,
      formData,
      edit,
      errors,
      errorSchema,
    };
  }

  public shouldComponentUpdate(nextProps, nextState) {
    return shouldRender(this, nextProps, nextState);
  }

  public validate(formData, schema = this.props.schema) {
    const { validate, transformErrors } = this.props;
    const { definitions } = this.getRegistry();
    const resolvedSchema = retrieveSchema(schema, definitions, formData);
    return validateFormData(formData, resolvedSchema, validate, transformErrors);
  }

  public renderErrors() {
    const { errors = [], errorSchema, schema, uiSchema } = this.state;
    const { ErrorList, showErrorList, formContext } = this.props;

    if (ErrorList && errors.length && showErrorList !== false) {
      return (
        <ErrorList
          errors={errors}
          errorSchema={errorSchema}
          schema={schema}
          uiSchema={uiSchema}
          formContext={formContext}
        />
      );
    }
    return null;
  }

  public onChange = (formData, newErrorSchema) => {
    const me = this;

    const mustValidate = !this.props.noValidate && this.props.liveValidate;
    let state: IFormState = { formData };
    // let state: IFormState;
    if (mustValidate) {
      const { errors, errorSchema } = this.validate(formData);
      state = { ...state, errors, errorSchema };
    } else if (!this.props.noValidate && newErrorSchema) {
      state = {
        ...state,
        errorSchema: newErrorSchema,
        errors: toErrorList(newErrorSchema),
      };
    }
    setState(this, state, () => {
      if (me.props.onChange) {
        me.props.onChange(me.state);
      }
    });
  };

  public onBlur = (...args) => {
    if (this.props.onBlur) {
      this.props.onBlur(...args);
    }
  };

  public onFocus = (...args) => {
    if (this.props.onFocus) {
      this.props.onFocus(...args);
    }
  };

  public onSubmit = (event) => {
    event.preventDefault();

    if (!this.props.noValidate) {
      const { errors, errorSchema } = this.validate(this.state.formData);
      if (Object.keys(errors).length > 0) {
        setState(this, { errors, errorSchema }, () => {
          if (this.props.onError) {
            this.props.onError(errors);
          } else {
            console.error("Form validation failed", errors);
          }
        });
        return;
      }
    }

    setState(this, { errors: [], errorSchema: {} }, () => {
      if (this.props.onSubmit) {
        this.props.onSubmit({ ...this.state, status: "submitted" });
      }
    });
  };

  public getRegistry() {
    // For BC, accept passed SchemaField and TitleField props and pass them to
    // the "fields" registry one.
    return {
      fields: this.props.fields,
      widgets: this.props.widgets,
      ArrayFieldTemplate: this.props.ArrayFieldTemplate,
      ObjectFieldTemplate: this.props.ObjectFieldTemplate,
      FieldTemplate: this.props.FieldTemplate,
      definitions: this.props.schema.definitions || {},
      formContext: this.props.formContext || {},
    };
  }

  public render() {
    const { children, safeRenderCompletion, id, idPrefix, className } = this.props;

    const { schema, uiSchema, formData, errorSchema, idSchema } = this.state;
    const registry = this.getRegistry();
    const SchemaFieldSub = registry.fields.SchemaField;

    return (
      <div className={className ? className : "rjsf"} id={id}>
        {this.renderErrors()}
        <SchemaFieldSub
          schema={schema}
          uiSchema={uiSchema}
          errorSchema={errorSchema}
          idSchema={idSchema}
          idPrefix={idPrefix}
          formData={formData}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          registry={registry}
          safeRenderCompletion={safeRenderCompletion}
        />
        {children ? (
          children
        ) : (
          <p>
            <button type="submit" className="btn btn-info" onClick={this.onSubmit}>
              Submit
            </button>
          </p>
        )}
      </div>
    );
  }
}
