import { ReactElement } from 'react';

import { UiSkeleton } from '../skeleton';

import { ImageProps } from './image.interface';

const Image = ({
  src = '',
  alt = '',
  width = '',
  className = null,
  isLoading,
}: ImageProps): ReactElement => {
  if (isLoading) {
    return <UiSkeleton circle />;
  }
  return <img src={src} alt={alt} width={width} className={className} />;
};

export default Image;
