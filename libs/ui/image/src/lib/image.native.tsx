import { ReactElement, useMemo } from 'react';

import { Image as ImageNative } from 'react-native';

import { ImageProps } from './image.interface';

export const Image = ({
  src = '',
  alt = '',
  className = '',
  mobSrcType = 'default',
}: ImageProps): ReactElement => {
  const getSrcType = useMemo(() => {
    switch (mobSrcType) {
      case 'uri':
        return { uri: src };
      case 'default':
      default:
        return src;
    }
  }, [mobSrcType, src]);

  return <ImageNative source={getSrcType} alt={alt} style={className} />;
};
