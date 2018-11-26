import * as React from "react";
import { getUiOptions, orderProperties, retrieveSchema } from "../../../silex-shared/src/utils";
import AddButton from "../AddButton";
import { IObjectFieldProps } from "../types";

function DefaultObjectFieldTemplate(props) {
    const canExpand = () => {
        const { formData, schema, uiSchema } = props;
        if (!schema.additionalProperties) {
            return false;
        }
        const { expandable } = getUiOptions(uiSchema);
        if (expandable === false) {
            return expandable;
        }
        // if ui$options.expandable was not explicitly set to false, we can add
        // another property if we have not exceeded maxProperties yet
        if (schema.maxProperties !== undefined) {
            return Object.keys(formData).length < schema.maxProperties;
        }
        return true;
    };

    const { TitleField, DescriptionField } = props;
    return (
        <fieldset>
            {(props.uiSchema["ui$title"] || props.title) && (
                <TitleField
                    id={`${props.idSchema.$id}__title`}
                    title={props.title || props.uiSchema["ui$title"]}
                    required={props.required}
                    formContext={props.formContext}
                />
            )}
            {props.description && (
                <DescriptionField
                    id={`${props.idSchema.$id}__description`}
                    description={props.description}
                    formContext={props.formContext}
                />
            )}
            {props.properties.map((prop) => prop.content)}
            {canExpand() && (
                <AddButton
                    className="object-property-expand"
                    onClick={props.onAddClick(props.schema)}
                    disabled={props.disabled || props.readonly}
                />
            )}
        </fieldset>
    );
}

class ObjectField extends React.Component<IObjectFieldProps, {}> {
    public static defaultProps = {
        uiSchema: {},
        formData: {},
        errorSchema: {},
        idSchema: {},
        required: false,
        disabled: false,
        readonly: false,
    };

    public static getDefaultValue(type) {
        switch (type) {
            case "string":
                return "New Value";
            case "array":
                return [];
            case "boolean":
                return false;
            case "null":
                return null;
            case "number":
                return 0;
            case "object":
                return {};
            default:
                // We don't have a datatype for some reason (perhaps additionalProperties was true)
                return "New Value";
        }
    }

    public state = {
        additionalProperties: {},
    };

    public isRequired(name) {
        const schema = this.props.schema;
        return Array.isArray(schema.required) && schema.required.indexOf(name) !== -1;
    }

    public onPropertyChange = (name) => {
        return (value, errorSchema) => {
            const newFormData = { ...this.props.formData, [name]: value };
            this.props.onChange(
                newFormData,
                errorSchema &&
                    this.props.errorSchema && {
                        ...this.props.errorSchema,
                        [name]: errorSchema,
                    },
            );
        };
    };

    public getAvailableKey = (preferredKey, formData) => {
        let index = 0;
        let newKey = preferredKey;
        while (this.props.formData.hasOwnProperty(newKey)) {
            newKey = `${preferredKey}-${++index}`;
        }
        return newKey;
    };

    public onKeyChange = (oldValue) => {
        return (value, errorSchema) => {
            value = this.getAvailableKey(value, this.props.formData);
            const newFormData = { ...this.props.formData };
            const property = newFormData[oldValue];
            delete newFormData[oldValue];
            newFormData[value] = property;
            this.props.onChange(
                newFormData,
                errorSchema &&
                    this.props.errorSchema && {
                        ...this.props.errorSchema,
                        [value]: errorSchema,
                    },
            );
        };
    };

    public handleAddClick = (schema) => () => {
        const type = schema.additionalProperties.type;
        const newFormData = { ...this.props.formData };
        newFormData[this.getAvailableKey("newKey", newFormData)] = ObjectField.getDefaultValue(
            type,
        );
        this.props.onChange(newFormData);
    };

    public render() {
        const {
            uiSchema,
            formData,
            errorSchema,
            idSchema,
            name,
            required,
            disabled,
            readonly,
            idPrefix,
            onBlur,
            onFocus,
            registry,
        } = this.props;
        const { definitions, fields, formContext } = registry;
        const { SchemaField, TitleField, DescriptionField } = fields;
        const schema = retrieveSchema(this.props.schema, definitions, formData);
        const title = schema.title === undefined ? name : schema.title;
        const description = uiSchema["ui$description"] || schema.description;
        let orderedProperties;

        try {
            const properties = Object.keys(schema.properties || {});
            orderedProperties = orderProperties(properties, uiSchema["ui$order"]);
        } catch (err) {
            return (
                <div>
                    <p className="config-error" style={{ color: "red" }}>
                        Invalid {name || "root"} object field configuration:
                        <em>{err.message}</em>.
                    </p>
                    <pre>{JSON.stringify(schema)}</pre>
                </div>
            );
        }

        const Template = registry.ObjectFieldTemplate || DefaultObjectFieldTemplate;

        const templateProps = {
            title: uiSchema["ui$title"] || title,
            description,
            TitleField,
            DescriptionField,
            properties: orderedProperties.map((nameSub) => {
                return {
                    content: (
                        <SchemaField
                            key={nameSub}
                            name={nameSub}
                            required={this.isRequired(nameSub)}
                            schema={schema.properties ? schema.properties[nameSub] : undefined}
                            uiSchema={uiSchema[nameSub]}
                            errorSchema={errorSchema[nameSub]}
                            idSchema={idSchema ? idSchema[nameSub] : undefined}
                            idPrefix={idPrefix}
                            formData={formData[nameSub]}
                            onKeyChange={this.onKeyChange(nameSub)}
                            onChange={this.onPropertyChange(nameSub)}
                            onBlur={onBlur}
                            onFocus={onFocus}
                            registry={registry}
                            disabled={disabled}
                            readonly={readonly}
                        />
                    ),
                    name: nameSub,
                    readonly,
                    disabled,
                    required,
                };
            }),
            required,
            idSchema,
            uiSchema,
            schema,
            formData,
            formContext,
        };
        return <Template {...templateProps} onAddClick={this.handleAddClick} />;
    }
}

export default ObjectField;
