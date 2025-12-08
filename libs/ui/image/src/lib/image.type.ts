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
