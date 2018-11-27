import * as _ from "lodash";
import { Store } from "./Store";
import { UISCHEMA_PROPS_FRONT, UISCHEMA_FRONT } from "../Types";

export class RightModuleStore {
    public store: Store;

    public constructor(store) {
        this.store = store;
    }

    public transferUiSchemaKey = (key) => {
        return _.replace(key, UISCHEMA_PROPS_FRONT, UISCHEMA_FRONT);
    };

    public getCurrentForm = () => {
        const { getCurrentWidget, currentParentPath } = this.store;

        const { schema, uiSchema, uiDefinitions, definitions } = getCurrentWidget(
            currentParentPath,
        );
        let formData = {};

        if (schema && schema.definitions) {
            formData = _.mapValues(schema.definitions, (_item, key) => {
                const currentKey = this.transferUiSchemaKey(key);

                if (_.has(schema, currentKey)) {
                    return schema[currentKey];
                } else if (_.has(uiSchema, currentKey)) {
                    return uiSchema[currentKey];
                }

                return;
            });
        }

        return {
            schema,
            uiSchema,
            uiDefinitions,
            definitions,
            formData,
        };
    };
}
