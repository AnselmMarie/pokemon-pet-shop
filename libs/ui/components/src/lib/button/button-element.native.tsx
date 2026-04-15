import { ReactElement } from 'react';
import { TouchableOpacity } from 'react-native';

import { Box, Image, Typography } from '@pokemon-pet-shop/ui-primitives';

import { Icon } from '../icon';
import { Skeleton } from '../skeleton';

import { ButtonProps } from './button-interface';

const ButtonElement = ({
  className = '',
  text,
  classNameText,
  appendIcon,
  appendImage = '',
  isDisabled,
  isLoading,
  onClick,
}: ButtonProps): ReactElement => {
  return (
    <TouchableOpacity className={className} disabled={isDisabled || isLoading} onPress={onClick}>
      {isLoading ? (
        <Box className="w-full">
          <Skeleton />
        </Box>
      ) : (
        <Box className="flex flex-1 items-center justify-center">
          <Typography className={classNameText}>{text}</Typography>
          {appendImage ? <Image src={appendImage} className="ml-sm" /> : null}
          {appendIcon ? <Icon icon={appendIcon} /> : null}
        </Box>
      )}
    </TouchableOpacity>
  );
};

export default ButtonElement;
