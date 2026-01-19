import { ReactElement } from 'react';
import { TouchableOpacity } from 'react-native';

import { Box } from '@pokemon-pet-shop/ui-box';
import { Icon } from '@pokemon-pet-shop/ui-icon';
import { Image } from '@pokemon-pet-shop/ui-image';
import { Skeleton } from '@pokemon-pet-shop/ui-skeleton';
import { Typography } from '@pokemon-pet-shop/ui-typography';

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
