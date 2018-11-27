import { includes } from "lodash";
import * as React from "react";
import { ICoreMetaSchema } from "silex-shared/types";
import {
    allowAdditionalItems,
    getDefaultFormState,
    getUiOptions,
    getWidget,
    isFilesArray,
    isFixedItems,
    isMultiSelect,
    optionsList,
    retrieveSchema,
    toIdSchema,
} from "silex-shared/utils";
import AddButton from "../AddButton";
import IconButton from "../IconButton";
import { IArrayFieldProps } from "../types";
import UnsupportedField from "./UnsupportedField";

function ArrayFieldTitle({ TitleField, idSchema, title, required }) {
    if (!title) {
        // See #312: Ensure compatibility with old versions of React.
        return <div />;
    }
    const id = `${idSchema.$id}__title`;
    return <TitleField id={id} title={title} required={required} />;
}

function ArrayFieldDescription({ DescriptionField, idSchema, description }) {
    if (!description) {
        // See #312: Ensure compatibility with old versions of React.
        return <div />;
    }
    const id = `${idSchema.$id}__description`;
    return <DescriptionField id={id} description={description} />;
}

// Used in the two templates
function DefaultArrayItem(props) {
    const btnStyle = {
        flex: 1,
        paddingLeft: 6,
        paddingRight: 6,
        fontWeight: "bold",
    };
    return (
        <div key={props.index} className={props.className}>
            <div className={props.hasToolbar ? "col-xs-9" : "col-xs-12"}>{props.children}</div>

            {props.hasToolbar && (
                <div className="col-xs-3 array-item-toolbox">
                    <div
                        className="btn-group"
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                        }}
                    >
                        {(props.hasMoveUp || props.hasMoveDown) && (
                            <IconButton
                                icon="arrow-up"
                                className="array-item-move-up"
                                tabIndex="-1"
                                style={btnStyle}
                                disabled={props.disabled || props.readonly || !props.hasMoveUp}
                                onClick={props.onReorderClick(props.index, props.index - 1)}
                            />
                        )}

                        {(props.hasMoveUp || props.hasMoveDown) && (
                            <IconButton
                                icon="arrow-down"
                                className="array-item-move-down"
                                tabIndex="-1"
                                style={btnStyle}
                                disabled={props.disabled || props.readonly || !props.hasMoveDown}
                                onClick={props.onReorderClick(props.index, props.index + 1)}
                            />
                        )}

                        {props.hasRemove && (
                            <IconButton
                                type="danger"
                                icon="remove"
                                className="array-item-remove"
                                tabIndex="-1"
                                style={btnStyle}
                                disabled={props.disabled || props.readonly}
                                onClick={props.onDropIndexClick(props.index)}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

function DefaultFixedArrayFieldTemplate(props) {
    return (
        <fieldset className={props.className}>
            <ArrayFieldTitle
                key={`array-field-title-${props.idSchema.$id}`}
                TitleField={props.TitleField}
                idSchema={props.idSchema}
                title={props.uiSchema["ui$title"] || props.title}
                required={props.required}
            />

            {(props.uiSchema["ui$description"] || props.schema.description) && (
                <div className="field-description" key={`field-description-${props.idSchema.$id}`}>
                    {props.uiSchema["ui$description"] || props.schema.description}
                </div>
            )}

            <div className="row array-item-list" key={`array-item-list-${props.idSchema.$id}`}>
                {props.items && props.items.map(DefaultArrayItem)}
            </div>

            {props.canAdd && (
                <AddButton
                    className="array-item-add"
                    onClick={props.onAddClick}
                    disabled={props.disabled || props.readonly}
                />
            )}
        </fieldset>
    );
}

function DefaultNormalArrayFieldTemplate(props) {
    return (
        <fieldset className={props.className}>
            <ArrayFieldTitle
                key={`array-field-title-${props.idSchema.$id}`}
                TitleField={props.TitleField}
                idSchema={props.idSchema}
                title={props.uiSchema["ui$title"] || props.title}
                required={props.required}
            />

            {(props.uiSchema["ui$description"] || props.schema.description) && (
                <ArrayFieldDescription
                    key={`array-field-description-${props.idSchema.$id}`}
                    DescriptionField={props.DescriptionField}
                    idSchema={props.idSchema}
                    description={props.uiSchema["ui$description"] || props.schema.description}
                />
            )}

            <div className="row array-item-list" key={`array-item-list-${props.idSchema.$id}`}>
                {props.items && props.items.map((p) => DefaultArrayItem(p))}
            </div>

            {props.canAdd && (
                <AddButton
                    className="array-item-add"
                    onClick={props.onAddClick}
                    disabled={props.disabled || props.readonly}
                />
            )}
        </fieldset>
    );
}

class ArrayField extends React.Component<IArrayFieldProps> {
    public static defaultProps: Partial<IArrayFieldProps> = {
        uiSchema: {},
        formData: [],
        idSchema: {},
        required: false,
        disabled: false,
        readonly: false,
        autofocus: false,
    };

    public static isItemRequired(itemSchema) {
        if (Array.isArray(itemSchema.type)) {
            // While we don't yet support composite/nullable jsonschema types, it's
            // future-proof to check for requirement against these.
            return !includes(itemSchema.type, "null");
        }
        // All non-null array item types are inherently required by design
        return itemSchema.type !== "null";
    }

    public canAddItem(formItems) {
        const { schema, uiSchema } = this.props;
        let { addable } = getUiOptions(uiSchema);
        if (addable !== false) {
            // if ui$options.addable was not explicitly set to false, we can add
            // another item if we have not exceeded maxItems yet
            if (schema.maxItems !== undefined) {
                addable = formItems.length < schema.maxItems;
            } else {
                addable = true;
            }
        }
        return addable;
    }

    public onAddClick = (event) => {
        event.preventDefault();
        const { schema, formData = [], registry } = this.props;
        const { definitions } = registry;
        let itemSchema = schema.items as ICoreMetaSchema | undefined;
        if (isFixedItems(schema) && allowAdditionalItems(schema)) {
            itemSchema = schema.additionalItems;
        }
        this.props.onChange([...formData, getDefaultFormState(itemSchema, undefined, definitions)]);
    };

    public onDropIndexClick = (index) => {
        return (event) => {
            if (event) {
                event.preventDefault();
            }
            const { formData = [], onChange } = this.props;
            // refs #195: revalidate to ensure properly reindexing errors
            let newErrorSchema;
            if (this.props.errorSchema) {
                newErrorSchema = {};
                const errorSchema = this.props.errorSchema;
                for (const i in errorSchema) {
                    if (errorSchema.hasOwnProperty(i)) {
                        const j = parseInt(i, 10);
                        if (i < index) {
                            newErrorSchema[j] = errorSchema[j];
                        } else if (j > index) {
                            newErrorSchema[j - 1] = errorSchema[j];
                        }
                    }
                }
            }
            onChange(formData.filter((_, i) => i !== index), newErrorSchema);
        };
    };

    public onReorderClick = (index, newIndex) => {
        return (event) => {
            if (event) {
                event.preventDefault();
                event.target.blur();
            }
            const { formData = [], onChange } = this.props;
            let newErrorSchema;
            if (this.props.errorSchema) {
                newErrorSchema = {};
                const errorSchema = this.props.errorSchema;
                for (const i in errorSchema) {
                    if (i === index) {
                        newErrorSchema[newIndex] = errorSchema[index];
                    } else if (i === newIndex) {
                        newErrorSchema[index] = errorSchema[newIndex];
                    } else {
                        newErrorSchema[i] = errorSchema[i];
                    }
                }
            }
            onChange(
                formData.map((item, i) => {
                    // i is string, index and newIndex are numbers,
                    // so using "==" to compare
                    if (i === newIndex) {
                        return formData[index];
                    } else if (i === index) {
                        return formData[newIndex];
                    } else {
                        return item;
                    }
                }),
                newErrorSchema,
            );
        };
    };

    public onChangeForIndex = (index) => {
        return (value, errorSchema) => {
            const { formData = [], onChange } = this.props;
            const newFormData = formData.map((item, i) => {
                // We need to treat undefined items as nulls to have validation.
                // See https://github.com/tdegrunt/jsonschema/issues/206
                const jsonValue = typeof value === "undefined" ? null : value;
                return index === i ? jsonValue : item;
            });
            onChange(
                newFormData,
                errorSchema &&
                    this.props.errorSchema && {
                        ...this.props.errorSchema,
                        [index]: errorSchema,
                    },
            );
        };
    };

    public onSelectChange = (value) => {
        this.props.onChange(value);
    };

    public render() {
        const { schema, uiSchema, idSchema, registry } = this.props;
        const { definitions } = registry;

        if (!schema.hasOwnProperty("items")) {
            return (
                <UnsupportedField
                    schema={schema}
                    idSchema={idSchema}
                    reason="Missing items definition"
                />
            );
        }
        if (isFixedItems(schema)) {
            return this.renderFixedArray();
        }
        if (isFilesArray(schema, uiSchema, definitions)) {
            return this.renderFiles();
        }
        if (isMultiSelect(schema, definitions)) {
            return this.renderMultiSelect();
        }
        return this.renderNormalArray();
    }

    public renderNormalArray() {
        const {
            schema,
            uiSchema,
            formData = [],
            errorSchema,
            idSchema = {},
            name,
            required,
            disabled,
            readonly,
            autofocus,
            registry,
            onBlur,
            onFocus,
            idPrefix,
            rawErrors,
        } = this.props;
        const title = schema.title === undefined ? name : schema.title;
        const { ArrayFieldTemplate, definitions, fields, formContext } = registry;
        const { TitleField, DescriptionField } = fields;
        const items = (schema.items || {}) as ICoreMetaSchema;
        const itemsSchema = retrieveSchema(items, definitions);
        const arrayProps = {
            canAdd: this.canAddItem(formData),
            items: formData.map((item, index) => {
                const itemSchema = retrieveSchema(items, definitions, item);
                const itemErrorSchema = errorSchema ? errorSchema[index] : undefined;
                const itemIdPrefix = idSchema.$id || "$id" + "_" + index;
                const itemIdSchema = toIdSchema(
                    itemSchema,
                    itemIdPrefix,
                    definitions,
                    item,
                    idPrefix,
                );
                return this.renderArrayFieldItem({
                    index,
                    canMoveUp: index > 0,
                    canMoveDown: index < formData.length - 1,
                    itemSchema,
                    itemIdSchema,
                    itemErrorSchema,
                    itemData: item,
                    itemUiSchema: (uiSchema as any).items,
                    autofocus: autofocus && index === 0,
                    onBlur,
                    onFocus,
                });
            }),
            className: `field field-array field-array-of-${itemsSchema.type}`,
            DescriptionField,
            disabled,
            idSchema,
            uiSchema,
            onAddClick: this.onAddClick,
            readonly,
            required,
            schema,
            title,
            TitleField,
            formContext,
            formData,
            rawErrors,
        };

        // Check if a custom render function was passed in
        const Component = ArrayFieldTemplate || DefaultNormalArrayFieldTemplate;
        return <Component {...arrayProps} />;
    }

    public renderMultiSelect() {
        const {
            schema,
            idSchema,
            uiSchema,
            formData,
            disabled,
            readonly,
            autofocus,
            onBlur,
            onFocus,
            registry,
            rawErrors,
        } = this.props;
        const items = this.props.formData;
        const { widgets, definitions, formContext } = registry;
        const schemaItems = (schema.items || {}) as ICoreMetaSchema;
        const itemsSchema = retrieveSchema(schemaItems, definitions, formData);
        const enumOptions = optionsList(itemsSchema, uiSchema);
        const { widget = "select", ...options } = {
            ...getUiOptions(uiSchema),
            enumOptions,
        };
        const Widget = getWidget(schema, widget, widgets);
        return (
            <Widget
                id={idSchema && idSchema.$id}
                multiple={true}
                onChange={this.onSelectChange}
                onBlur={onBlur}
                onFocus={onFocus}
                options={options}
                schema={schema}
                value={items}
                disabled={disabled}
                readonly={readonly}
                formContext={formContext}
                autofocus={autofocus}
                rawErrors={rawErrors}
            />
        );
    }

    public renderFiles() {
        const {
            schema,
            uiSchema,
            idSchema,
            name,
            disabled,
            readonly,
            autofocus,
            onBlur,
            onFocus,
            registry,
            rawErrors,
        } = this.props;
        const title = schema.title || name;
        const items = this.props.formData;
        const { widgets, formContext } = registry;
        const { widget = "files", ...options } = getUiOptions(uiSchema);
        const Widget = getWidget(schema, widget, widgets);
        return (
            <Widget
                options={options}
                id={idSchema && idSchema.$id}
                multiple={true}
                onChange={this.onSelectChange}
                onBlur={onBlur}
                onFocus={onFocus}
                schema={schema}
                title={title}
                value={items}
                disabled={disabled}
                readonly={readonly}
                formContext={formContext}
                autofocus={autofocus}
                rawErrors={rawErrors}
            />
        );
    }

    public renderFixedArray() {
        const {
            schema,
            uiSchema,
            formData = [],
            errorSchema,
            idPrefix,
            idSchema = {},
            name,
            required,
            disabled,
            readonly,
            autofocus,
            registry,
            onBlur,
            onFocus,
            rawErrors,
        } = this.props;
        const title = schema.title || name;
        let items = this.props.formData || [];
        const { ArrayFieldTemplate, definitions, fields, formContext } = registry;
        const { TitleField } = fields;
        const schemaItems = (schema.items || []) as ICoreMetaSchema[];
        const itemSchemas = schemaItems.map((item, index) =>
            retrieveSchema(item, definitions, formData[index]),
        );
        const additionalSchema = allowAdditionalItems(schema)
            ? retrieveSchema(schema.additionalItems || {}, definitions, formData)
            : null;

        if (!items || items.length < itemSchemas.length) {
            // to make sure at least all fixed items are generated
            items = items || [];
            items = items.concat(new Array(itemSchemas.length - items.length));
        }

        // These are the props passed into the render function
        const arrayProps = {
            canAdd: this.canAddItem(items) && additionalSchema,
            className: "field field-array field-array-fixed-items",
            disabled,
            idSchema,
            formData,
            items: items.map((item, index) => {
                const additional = index >= itemSchemas.length;
                const itemSchema = additional
                    ? retrieveSchema(schema.additionalItems || {}, definitions, item)
                    : itemSchemas[index];
                const itemIdPrefix = idSchema.$id || "$id" + "_" + index;
                const itemIdSchema = toIdSchema(
                    itemSchema,
                    itemIdPrefix,
                    definitions,
                    item,
                    idPrefix,
                );

                const uiSchemaItems:
                    | ICoreMetaSchema
                    | ICoreMetaSchema[]
                    | undefined = (uiSchema as any).items;

                const itemUiSchema = additional
                    ? (uiSchema as any).additionalItems || {}
                    : Array.isArray(uiSchemaItems)
                        ? uiSchemaItems[index]
                        : uiSchemaItems || {};
                const itemErrorSchema = errorSchema ? errorSchema[index] : undefined;

                return this.renderArrayFieldItem({
                    index,
                    canRemove: additional,
                    canMoveUp: index >= itemSchemas.length + 1,
                    canMoveDown: additional && index < items.length - 1,
                    itemSchema,
                    itemData: item,
                    itemUiSchema,
                    itemIdSchema,
                    itemErrorSchema,
                    autofocus: autofocus && index === 0,
                    onBlur,
                    onFocus,
                });
            }),
            onAddClick: this.onAddClick,
            readonly,
            required,
            schema,
            uiSchema,
            title,
            TitleField,
            formContext,
            rawErrors,
        };

        // Check if a custom templates templates was passed in
        const Template = ArrayFieldTemplate || DefaultFixedArrayFieldTemplate;
        return <Template {...arrayProps} />;
    }

    public renderArrayFieldItem(props) {
        const {
            index,
            canRemove = true,
            canMoveUp = true,
            canMoveDown = true,
            itemSchema,
            itemData,
            itemUiSchema,
            itemIdSchema,
            itemErrorSchema,
            autofocus,
            onBlur,
            onFocus,
            rawErrors,
        } = props;
        const { disabled, readonly, uiSchema, registry } = this.props;
        const {
            fields: { SchemaField },
        } = registry;
        const { orderable, removable } = {
            orderable: true,
            removable: true,
            ...uiSchema["ui$options"],
        };
        const has = {
            moveUp: orderable && canMoveUp,
            moveDown: orderable && canMoveDown,
            remove: removable && canRemove,
            toolbar: {},
        };
        has.toolbar = Object.keys(has).some((key) => has[key]);

        return {
            children: (
                <SchemaField
                    schema={itemSchema}
                    uiSchema={itemUiSchema}
                    formData={itemData}
                    errorSchema={itemErrorSchema}
                    idSchema={itemIdSchema}
                    required={ArrayField.isItemRequired(itemSchema)}
                    onChange={this.onChangeForIndex(index)}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    registry={this.props.registry}
                    disabled={this.props.disabled}
                    readonly={this.props.readonly}
                    autofocus={autofocus}
                    rawErrors={rawErrors}
                />
            ),
            className: "array-item",
            disabled,
            hasToolbar: has.toolbar,
            hasMoveUp: has.moveUp,
            hasMoveDown: has.moveDown,
            hasRemove: has.remove,
            index,
            onDropIndexClick: this.onDropIndexClick,
            onReorderClick: this.onReorderClick,
            readonly,
        };
    }
}

export default ArrayField;
