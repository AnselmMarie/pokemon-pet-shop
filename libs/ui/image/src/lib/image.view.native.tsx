import { ReactElement, useMemo } from 'react';

import { Image } from 'react-native';

import { ImageProps } from './image.interface';

const ElementLayout = ({
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

  return <Image source={getSrcType} alt={alt} style={className} />;
};

export default ElementLayout;
