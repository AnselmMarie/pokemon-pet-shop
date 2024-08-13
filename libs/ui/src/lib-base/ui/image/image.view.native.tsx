import { ReactElement } from 'react';

import { Image } from 'react-native';

import { ImageProps } from './image.interface';

const ElementLayout = ({ src = '', alt = '', className = '' }: ImageProps): ReactElement => {
  return <Image src={src} alt={alt} style={className} />;
};

export default ElementLayout;
