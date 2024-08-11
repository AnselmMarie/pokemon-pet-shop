export interface GenericObjectInter {
  [k: string]:
    | boolean
    | number
    | string
    | Array<GenericObjectInter | string | number>
    | Record<string, unknown>;
}

export interface GenericArrayInter {
  [index: number]: GenericObjectInter | boolean | number | string | Record<string, unknown>;
}

export interface InstantiableInter<T = unknown> {
  new (...args: Array<unknown>): T;
}
