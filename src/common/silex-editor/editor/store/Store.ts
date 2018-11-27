import * as _ from "lodash";
import {action, observable, toJS} from "mobx";
import {JSONSchema, UISchema, WidgetApi} from "../api/api";
import {LeftModuleStore} from "./LeftModuleStore";
import {RightModuleStore} from "./RightModuleStore";

import {toJSDeep} from "../../lib/util";
import {
    DragBoxBean,
    EditFormBeanType,
    SPLIT_PATH,
    UISCHEMA_PROPS_FRONT,
    WidgetPathAndObjectBean,
    WidgetPathBean,
} from "../Types";
import {CenterModuleStore} from "./CenterModuleStore";

export class Store {
    public leftModule: LeftModuleStore;
    public rightModule: RightModuleStore;
    public centerModuleStore: CenterModuleStore;

    /**
     * 当前提交的 form 表单
     */
    @observable
    public form: any = {
        schema: {type: "object", properties: {}},
        uiSchema: {},
        formData: {},
        uiDefinitions: {},
        definitions: {},
    };

    @observable
    public currentParentPath = {
        currentFormDataPath: "",
        currentSchemaPath: "",
        currentUiSchemaPath: "",
        currentUiDefinitionsPath: "",
        currentDefinitionsPath: "",
    };

    public constructor(loader?: (store: Store) => {}) {
        this.leftModule = new LeftModuleStore(this);
        this.rightModule = new RightModuleStore(this);
        this.centerModuleStore = new CenterModuleStore(this);
        if (loader) {
            loader(this);
        }
    }

    // @action
    // public addWidget = (data) =>  {
    //   return widgetApi.addWidget(data);
    // };

    @action
    public setForm = () => {
        console.log(toJS(this.form));

        this.form = toJS(this.form);
    };
    /**
     * 生成一个唯一的key
     * @param {JSONSchema} props
     * @returns {string}
     */
    public getUuid = (props: JSONSchema) => {
        return `${props.type}@${Date.now().toString()}`;
    };
    /**
     * @param {string} cuSchemaPath
     * @param {JSONSchema} currentSchema
     */
    public setFormProps = (cuSchemaPath: string, currentSchema: JSONSchema) => {
        _.set(this.form, cuSchemaPath, currentSchema);
    };
    /**
     * @param {string} currentKey 当前key
     * @param {string} paUiSchemaPath 父级的uischemaPath
     * @param {string} cuUiSchemaPath 当前的uischemaPath
     * @param {UISchema} uiSchema   当前需要赋值的uischema
     * @param {UISchema} parentUiSchema 父级的uischema
     * @param {JSONSchema} parentSchema 父级的schema
     * @param {number} dropIndex   需要拖拽的索引位置
     */
    public setUiSchema = (
        currentKey: string,
        paUiSchemaPath: string,
        cuUiSchemaPath: string,
        currentUiSchema: UISchema,
        parentUiSchema: UISchema,
        parentSchema: JSONSchema,
        dropIndex: number,
    ) => {
        _.set(this.form, cuUiSchemaPath, currentUiSchema);
        this.setUiOrder(parentSchema, parentUiSchema, paUiSchemaPath, currentKey, dropIndex);
    };

    /**
     * 设置 form 排序（uischema ui$order）
     * @param {JSONSchema} parentSchema
     * @param {UISchema} parentUiSchema
     * @param {string} paUiSchemaPath
     * @param {string} currentKey
     * @param {number} dropIndex
     */
    public setUiOrder = (
        parentSchema: JSONSchema,
        parentUiSchema: UISchema,
        paUiSchemaPath: string,
        currentKey: string,
        dropIndex: number,
    ) => {
        const props = (parentSchema && parentSchema.properties) || [];

        // 获取当前拖拽父级的ui$order
        let ui$order: any = [];

        if (parentUiSchema && parentUiSchema.ui$order) {
            ui$order = _.filter(parentUiSchema.ui$order, (key) => {
                return currentKey !== key;
            });

            ui$order.splice(dropIndex + 1, 0, currentKey);
        } else {
            ui$order = _.concat(
                toJS(
                    _.map(props, (item, propsKey) => {
                        return propsKey;
                    }),
                ),
                currentKey,
            );
        }

        console.log("addWidgetToCenter(ui$order)", toJS(ui$order), "currentKey", currentKey);

        _.set(this.form, `${paUiSchemaPath}.ui$order`, ui$order);
    };
    /**
     * 设置 formdata
     * @param {string} cuFormDataPath
     * @param data
     */
    public setFormData = (cuFormDataPath: string, data: any) => {
        _.set(this.form, cuFormDataPath, data);
    };
    /**
     * 设置 definations
     * @param cuUiDefPath
     * @param uiDefinition
     */
    public setUiDefinations = (cuUiDefPath, uiDefinition) => {
        _.set(this.form, cuUiDefPath, uiDefinition);
    };

    /**
     *
     */
    public setDefinations = (cuDefPath, definition) => {
        _.set(this.form, cuDefPath, definition);
    };
    /**
     * 获取父级或者当前的控件的路径和对象
     * isCurrent = true 父级
     * @param path
     * @param {boolean} isCurrent
     * @returns {WidgetPathAndObjectBean}
     */
    public getPathAndObject = (path, isCurrent = false): WidgetPathAndObjectBean => {
        const widgetPathObj = this.getCurrentPath(isCurrent ? path : getParentPathByCuPath(path));
        const widgetObject = this.getCurrentWidget(widgetPathObj);

        return {widgetPathObj, widgetObject};
    };

    /**
     * 删除widget (清空schema，uischema， uidefinations，formdata)
     * @param {WidgetPathBean} cuDragPath
     * @param {string} currentKey
     * @param {string} paUiSchemaPath
     * @param {UISchema} paUiSchema
     * @returns {{}}
     */
    public deleteCurrentItem = (
        currentPathObj: WidgetPathBean,
        currentKey: string,
        paUiSchemaPath: string,
        paUiSchema: UISchema,
    ) => {
        const deleteSign = {};

        _.forIn(currentPathObj, (path, key) => {
            deleteSign[key] = _.unset(this.form, path);
        });

        this.setOriginOrder(currentKey, paUiSchemaPath, paUiSchema);

        return deleteSign;
    };

    /**
     * 删除当前的控件
     * @param {string} id$schema
     */
    @action
    public deleteWidget = (id$schema: string) => {
        const currentKey = this.findCurrentKey(id$schema);
        const currentWidget = this.getPathAndObject(id$schema, true);
        const {widgetPathObj, widgetObject} = this.getPathAndObject(id$schema);

        this.deleteCurrentItem(
            currentWidget.widgetPathObj,
            currentKey,
            widgetPathObj.currentUiSchemaPath,
            widgetObject.uiSchema,
        );

        this.setForm();
    };

    /**
     * 修改原始的ui$order
     * @param {string} currentKey
     * @param {string} paUiSchemaPath
     * @param {UISchema} parentUiSchema
     */
    public setOriginOrder = (
        currentKey: string,
        paUiSchemaPath: string,
        parentUiSchema: UISchema,
    ) => {
        const uiOrder = _.filter(parentUiSchema.ui$order, (fieldName, key) => {
            return currentKey !== fieldName;
        });

        _.set(this.form, `${paUiSchemaPath}.ui$order`, uiOrder);
    };

    /**
     * 获取当前的key值
     * @param fullPath
     * @returns {string | undefined}
     */
    public findCurrentKey = (fullPath) => {
        return _.findLast(_.split(fullPath, SPLIT_PATH)) || "";
    };

    /**
     * 拖拽排序, 删除之前的， 添加拖拽排序的控件
     * @param {string} origin_dragCuPath
     * @param {number} dragIndex
     * @param {string} origin_dropCuPath
     * @param {number} dropIndex
     * @param {boolean} isDropObject
     */
    @action
    public dragSortOpration = (
        origin_dragCuPath: string,
        dragIndex: number,
        origin_dropCuPath: string,
        dropIndex: number,
        isDropObject: boolean,
    ) => {
        // 获取当前的拖拽的path
        const dragCuPathObj = this.getCurrentPath(origin_dragCuPath);

        // 获取当前的dragCu的Widget对象
        const dragCuItem = this.getCurrentWidget(dragCuPathObj);

        // 根据当前拖拽对象路径dragCuPath获取父级对象
        const dragParent = this.getPathAndObject(origin_dragCuPath);

        // 根据当前放下对象路径dropCuPath获取父级对象
        const dropParent = this.getPathAndObject(origin_dropCuPath, isDropObject);

        // 获取当前拖拽的key
        const currentDragKey = this.findCurrentKey(origin_dragCuPath);

        // 获取当前拖拽的路径和对象
        const dragParentPathObj = dragParent.widgetPathObj;
        const dragParentItem = dragParent.widgetObject;

        // 获取当前放置的路径和对象
        const dropParentPathObj = dropParent.widgetPathObj;
        const dropParentItem = dropParent.widgetObject;

        // 当前所在位置
        const dropCuPathObj = this.getCurrentPathObject(dropParentPathObj, currentDragKey);

        // 删除之前drop对象(不是处在同一级)
        const deleteSign = this.deleteCurrentItem(
            dragCuPathObj,
            currentDragKey,
            dragParentPathObj.currentUiSchemaPath,
            dragParentItem.uiSchema,
        );

        this.setUiSchema(
            currentDragKey,
            dropParentPathObj.currentUiSchemaPath,
            dropCuPathObj.currentUiSchemaPath,
            dragCuItem.uiSchema,
            dropParentItem.uiSchema,
            dropParentItem.schema,
            dropIndex,
        );
        this.setFormProps(dropCuPathObj.currentSchemaPath, dragCuItem.schema);
        this.setFormData(dropCuPathObj.currentFormDataPath, dragCuItem.formData);
        this.setUiDefinations(dropCuPathObj.currentUiDefinitionsPath, dragCuItem.uiDefinitions);
        this.setDefinations(dropCuPathObj.currentDefinitionsPath, dragCuItem.definitions);

        this.setForm();
    };

    /**
     * 点击中间区域， 根据右边的配置项描述更新中间的组件信息
     * @param formData
     * @param {JSONSchema} parentSchema
     * @param {UISchema} parentUiSchema
     * @param parentFormData
     */
    @action
    public setCurrentForm = (formData) => {
        for (const key in formData) {
            if (this.currentParentPath) {
                const {
                    currentSchemaPath,
                    currentUiSchemaPath,
                    currentFormDataPath,
                } = this.currentParentPath;

                const currentKey = this.rightModule.transferUiSchemaKey(key);

                if (currentSchemaPath && !_.includes(key, UISCHEMA_PROPS_FRONT)) {
                    _.set(this.form, `${currentSchemaPath}.${currentKey}`, formData[key]);
                }

                if (currentUiSchemaPath && _.includes(key, UISCHEMA_PROPS_FRONT)) {
                    _.set(this.form, `${currentUiSchemaPath}.${currentKey}`, formData[key]);
                }

                if (currentFormDataPath) {
                    _.set(this.form, `${currentFormDataPath}.${currentKey}`, formData[key]);
                }
            }
        }

        this.setForm();

        console.log("form: ", toJSDeep(this.form));
    };
    /**
     * 添加控件 至 中间区域
     */
    @action
    public addWidgetToCenter = (item: DragBoxBean) => {
        const {index, cuParentPath, widget} = item;

        const parentPathObj = this.getCurrentPath(cuParentPath);

        const cuParent = this.getCurrentWidget(parentPathObj);

        const {schema, uiSchema, formData, uiDefinitions, definitions} = widget;

        const key = this.getUuid(schema);

        const currentPathObj = this.getCurrentPathObject(parentPathObj, key);

        this.setUiSchema(
            key,
            parentPathObj.currentUiSchemaPath,
            currentPathObj.currentUiSchemaPath,
            uiSchema,
            cuParent.uiSchema,
            cuParent.schema,
            index,
        );
        this.setFormProps(currentPathObj.currentSchemaPath, schema);
        this.setFormData(currentPathObj.currentFormDataPath, formData);
        this.setUiDefinations(currentPathObj.currentUiDefinitionsPath, uiDefinitions);
        this.setDefinations(currentPathObj.currentDefinitionsPath, definitions);

        this.setForm();

        this.setCurrentParentPath(currentPathObj);
        this.centerModuleStore.setCurrentClickPath(currentPathObj.currentSchemaPath);
    };
    /**
     * 获取当前的 keyPath
     * @param {string} id
     * @param {EditFormBeanType} key
     * @returns {any[]}
     */
    public getKeyPathArr = (id: string = "", key: EditFormBeanType = "schema") => {
        return _.chain(id)
            .replace("root", key)
            .split(SPLIT_PATH)
            .filter((path) => {
                return !_.isEmpty(path);
            })
            .value();
    };

    /**
     * 获取当前 widget 所有路径
     * @param {string} id
     * @returns {WidgetPathBean}
     */
    public getCurrentPath = (id: string): WidgetPathBean => {
        return {
            currentSchemaPath: _.join(this.getKeyPathArr(id, "schema"), ".properties."),
            currentUiSchemaPath: _.join(this.getKeyPathArr(id, "uiSchema"), "."),
            currentFormDataPath: _.join(this.getKeyPathArr(id, "formData"), "."),
            currentUiDefinitionsPath: _.join(this.getKeyPathArr(id, "uiDefinitions"), "."),
            currentDefinitionsPath: _.join(this.getKeyPathArr(id, "definitions"), "."),
        };
    };
    /**
     * 右侧所有配置项的父级, 中间区域的当前项
     * @param path
     */
    @action
    public setCurrentParentPath = (path) => {
        this.currentParentPath = path;
    };

    /**
     * @param {WidgetPathBean} currentPathObj
     * @returns {{schema: any; uiSchema: any; formData: any; uiDefinitions: any}}
     */
    public getCurrentWidget = (currentPathObj: WidgetPathBean) => {
        return {
            schema: _.get(this.form, currentPathObj.currentSchemaPath),
            uiSchema: _.get(this.form, currentPathObj.currentUiSchemaPath),
            formData: _.get(this.form, currentPathObj.currentFormDataPath),
            uiDefinitions: _.get(this.form, currentPathObj.currentUiDefinitionsPath),
            definitions: _.get(this.form, currentPathObj.currentDefinitionsPath),
        };
    };
    /**
     * 获取当前控件的整体路径以及对象
     * @param {WidgetPathBean} parentPathObject
     * @param {string} currentDragKey
     * @returns {WidgetPathBean}
     */
    public getCurrentPathObject = (
        parentPathObject: WidgetPathBean,
        currentDragKey: string,
    ): WidgetPathBean => {
        return {
            currentFormDataPath: `${parentPathObject.currentFormDataPath}.${currentDragKey}`,
            currentSchemaPath: `${parentPathObject.currentSchemaPath}.properties.${currentDragKey}`,
            currentUiSchemaPath: `${parentPathObject.currentUiSchemaPath}.${currentDragKey}`,
            currentUiDefinitionsPath: `${
                parentPathObject.currentUiDefinitionsPath
                }.${currentDragKey}`,
            currentDefinitionsPath: `${parentPathObject.currentDefinitionsPath}.${currentDragKey}`,
        };
    };
}

/**
 * 获取父级的路径
 * @param cuPath
 * @returns {string}
 */
export const getParentPathByCuPath = (cuPath) => {
    return _.chain(cuPath)
        .split(SPLIT_PATH)
        .dropRight()
        .join(SPLIT_PATH)
        .value();
};

export const isRoot = (id) => {
    return id === "root" || id === "root_$_";
};

export const dragDirection = (
    dragIndex: any,
    hoverIndex: any,
    initialClientOffset: any,
    clientOffset: any,
    sourceClientOffset: any,
) => {
    const hoverMiddleY = (initialClientOffset.y - sourceClientOffset.y) / 2;
    const hoverClientY = clientOffset.y - sourceClientOffset.y;
    if (dragIndex < hoverIndex && hoverClientY > hoverMiddleY) {
        return "downward";
    }
    if (dragIndex > hoverIndex && hoverClientY < hoverMiddleY) {
        return "upward";
    }

    return "";
};
