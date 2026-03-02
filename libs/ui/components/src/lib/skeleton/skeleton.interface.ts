interface SkeletonProps {
  count?: number;
  width?: number;
  borderRadius?: string;
  circle?: boolean;
  baseColor?: string;
  highlightColor?: string;
}

export interface SkeletonNativeProps extends SkeletonProps {
  height?: number | undefined;
}

export interface SkeletonWebProps extends SkeletonProps {
  height?: number | string | undefined;
}
