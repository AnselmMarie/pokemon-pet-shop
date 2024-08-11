export type GenericNonReturnPromiseType = () => Promise<void>;
export type GenericNonReturnType = (...params: any) => void;
export type GenericBooleanReturnType = (...params: any) => boolean;
export type GenericStringReturnType = (...params: any) => string;
export type GenericStringArrayReturnType = (...params: any) => Array<string>;
export type GenericObjectReturnType = (...params: any) => Record<string, unknown>;
export type GenericNumberReturnType = (...params: any) => number;
export type GenericUnknownReturnType = (...params: any) => unknown;
export type GenericVoidPromiseReturnType = (...params: any) => Promise<void>;
export type GenericBooleanPromiseReturnType = (...params: any) => Promise<boolean>;
export type GenericAnyType = (
  ...params: any
) => number | string | boolean | Record<string, any> | Array<string>;
