import { ReactElement } from 'react';

import { Box, Image, Typography } from '@pokemon-pet-shop/ui-primitives';

import { Icon } from '../icon';
import { Skeleton } from '../skeleton';

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
