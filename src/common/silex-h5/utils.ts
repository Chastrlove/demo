/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: utils.ts
 */

interface InterfaceSpec {
  step?: number;
  min?: number;
  max?: number;
}

export function rangeSpec(schema) {
  const spec: InterfaceSpec = {};
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
