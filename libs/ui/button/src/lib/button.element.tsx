import { ReactElement } from 'react';

import { Box } from '@ui/box';
import { Icon } from '@ui/icon';
import { Image } from '@ui/image';
import { Skeleton } from '@ui/skeleton';
import { Typography } from '@ui/typography';

import { ButtonProps } from './button.interface';

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
        <Box className="flex flex-1 items-center justify-center">
          <Typography className={classNameText}>{text}</Typography>
          {appendImage ? <Image src={appendImage} className="ml-2" /> : null}
          {appendIcon ? <Icon icon={appendIcon} /> : null}
        </Box>
      )}
    </button>
  );
};

export default ButtonElement;
