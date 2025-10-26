import { ReactElement } from 'react';

// import { UiSkeleton } from '../skeleton';

import { ImageProps } from './image.interface';

export const Image = ({
  src = '',
  alt = '',
  width = 90,
  height = 90,
  className = '',
  iconSize,
  fallbackClassName = '',
  contentFit = 'contain',
  isLoading = false,
  isCircle = false,
}: ImageProps): ReactElement => {
  // if (isLoading) {
  //   return <UiSkeleton height="100%" circle />;
  // }
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};
