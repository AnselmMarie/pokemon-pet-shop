export declare enum mobSrcTypeEnum {
    DEFAULT = "default",
    URI = "uri"
}
export declare enum ImageContentFitEnum {
    CONTAIN = "contain",
    COVER = "cover",
    FILL = "fill",
    SCALE_DOWN = "scale-down",
    NONE = "none"
}
export type MobSrcType = (typeof mobSrcTypeEnum)[keyof typeof mobSrcTypeEnum];
export type ImageContentFit = (typeof ImageContentFitEnum)[keyof typeof ImageContentFitEnum];
export type MobSrcTypeLiteral = 'default' | 'uri';
export type ImageContentFitLiteral = 'contain' | 'cover' | 'fill' | 'scale-down' | 'none';
//# sourceMappingURL=image.type.d.ts.map