interface SkeletonProps {
  count?: number;
  width?: number;
  circle?: boolean;
}

export interface SkeletonNativeProps extends SkeletonProps {
  height?: number | undefined;
}

export interface SkeletonWebProps extends SkeletonProps {
  height?: number | string | undefined;
}
