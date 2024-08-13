import { ReactElement } from 'react';

import { ImageProps } from './image.interface';

const Image = ({ src = '', alt = '', width = '', className = null }: ImageProps): ReactElement => {
  return <img src={src} alt={alt} width={width} className={className} />;
};

export default Image;
