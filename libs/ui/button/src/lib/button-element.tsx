import { ReactElement } from 'react';

import { Box } from '@pokemon-pet-shop/ui-box';
import { Icon } from '@pokemon-pet-shop/ui-icon';
import { Image } from '@pokemon-pet-shop/ui-image';
import { Skeleton } from '@pokemon-pet-shop/ui-skeleton';
import { Typography } from '@pokemon-pet-shop/ui-typography';

import { ButtonProps } from './button-interface';

const ButtonElement = ({
  className = '',
  classNameText = '',
  text = null,
  appendIcon,
  appendImage = '',
  isDisabled,
  isLoading,
  onClick,
}: ButtonProps): ReactElement => {
  return (
    <button className={className} disabled={isDisabled} onClick={onClick}>
      {isLoading ? (
        <Box className="w-full">
          <Skeleton />
        </Box>
      ) : (
        <Box className="flex flex-1 items-center justify-center gap-xs">
          <Typography className={classNameText}>{text}</Typography>
          {appendImage ? <Image src={appendImage} /> : null}
          {appendIcon ? <Icon icon={appendIcon} /> : null}
        </Box>
      )}
    </button>
  );
};

export default ButtonElement;
