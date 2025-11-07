import { ReactElement, useState } from 'react';
import { Image as ExpoImage, ImageContentFit } from 'expo-image';
import { cssInterop } from 'nativewind';

import { Box } from '@ui/box';
// import { Icon } from '@ui/icon';

// import { UiSkeleton } from '../skeleton';
import { ImageProps } from './image.interface';
// import { IconTypeEnum, UiIcon } from '../icon';

const StyledExpoImage = cssInterop(
  ExpoImage as unknown as React.ComponentType<any>,
  {
    className: 'style',
  }
);

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
  const [fallbackImage, setFallbackImage] = useState<boolean>(false);

  const fallbackStyles = `bg-secondary-light rounded-md ${
    isCircle ? 'rounded-xl' : ''
  }`;
  //   ${fallbackClassName}
  // if (isLoading) {
  //   return <UiSkeleton width={width} height={height} isCircle={isCircle} />;
  // }

  return (
    <Box
      className={`${className} items-center justify-center ${
        fallbackImage && fallbackStyles
      }`}
    >
      {/* {fallbackImage && <Icon size={iconSize} icon="IconPhoto" />} */}
      {!fallbackImage && (
        <StyledExpoImage
          source={fallbackImage || src}
          alt={alt}
          contentFit={contentFit as ImageContentFit}
          className={`flex-1 w-full rounded-md ${isCircle ? 'rounded-xl' : ''}`}
          onError={() => {
            setFallbackImage(true);
          }}
        />
      )}
    </Box>
  );
};
