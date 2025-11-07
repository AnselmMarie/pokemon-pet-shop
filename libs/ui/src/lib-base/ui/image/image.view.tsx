import { ReactElement } from 'react';

import { UiSkeleton } from '../skeleton';

import { ImageProps } from './image.interface';

const Image = ({ src = '', alt = '', className = null, isLoading }: ImageProps): ReactElement => {
  if (isLoading) {
    return <UiSkeleton height="100%" circle />;
  }
  return <img src={src} alt={alt} className={className} />;
};

export default Image;
