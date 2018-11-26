import * as _ from "lodash";
import { isObservable, toJS } from "mobx";
import { PurpleCoreSchemaMetaSchema } from "./types";

export function isEmptyWithNumber(value: any) {
    return _.isNumber(value) ? _.isNaN(value) : _.isEmpty(value);
}

interface SpecBean {
    step?: number;
    min?: number;
    max?: number;
}

interface InputSpecBean {
    minLength?: number;
    maxLength?: number;
}

export function rangeSpec(schema: PurpleCoreSchemaMetaSchema): SpecBean {
    const spec: SpecBean = {};

    if (schema.multipleOf) {
        spec.step = schema.multipleOf;
    }
    if (schema.minimum || schema.minimum === 0) {
        spec.min = schema.minimum;
    }
    if (schema.maximum || schema.maximum === 0) {
        spec.max = schema.maximum;
    }

    return spec;
}

export function inputSpec(schema: PurpleCoreSchemaMetaSchema): InputSpecBean {
    const spec: InputSpecBean = {};

    if (!isEmptyWithNumber(schema.maxLength)) {
        spec.maxLength = schema.maxLength;
    }
    if (!isEmptyWithNumber(schema.minLength)) {
        spec.minLength = schema.minLength;
    }

    return spec;
}

export function toJSDeep(source, detectCycles: boolean = false) {
    const clone = toJS(source, { detectCycles });

    _.forEach(clone, (value, key) => {
        if (isObservable(value)) {
            clone[key] = toJSDeep(value, detectCycles);
        }
    });
    return clone;
}
