import { ReactElement, useMemo } from 'react';

import { Image } from 'react-native';

import { mobSrcTypeEnum } from './image.enum';
import { ImageProps } from './image.interface';

const ElementLayout = ({
  src = '',
  alt = '',
  className = '',
  mobSrcType = mobSrcTypeEnum.DEFAULT,
}: ImageProps): ReactElement => {
  const getSrcType = useMemo(() => {
    switch (mobSrcType) {
      case mobSrcTypeEnum.URI:
        return { uri: src };
      case mobSrcTypeEnum.DEFAULT:
      default:
        return src;
    }
  }, [mobSrcType, src]);

  return <Image source={getSrcType} alt={alt} style={className} />;
};

export default ElementLayout;
