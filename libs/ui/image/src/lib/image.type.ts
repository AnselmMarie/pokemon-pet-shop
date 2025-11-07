export enum mobSrcTypeEnum {
  DEFAULT = 'default',
  URI = 'uri',
}

export enum ImageContentFitEnum {
  CONTAIN = 'contain',
  COVER = 'cover',
  FILL = 'fill',
  SCALE_DOWN = 'scale-down',
  NONE = 'none',
}

// Types corresponding to the enums above. Use these in component props instead of the enum when
// you only need the string literal type.
export type MobSrcType = (typeof mobSrcTypeEnum)[keyof typeof mobSrcTypeEnum];
export type ImageContentFit =
  (typeof ImageContentFitEnum)[keyof typeof ImageContentFitEnum];

// Convenience exported union types (alternative simple form)
export type MobSrcTypeLiteral = 'default' | 'uri';
export type ImageContentFitLiteral =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'scale-down'
  | 'none';
