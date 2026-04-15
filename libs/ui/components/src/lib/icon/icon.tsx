import { ReactElement, useCallback, useMemo } from 'react';

import { Box } from '@pokemon-pet-shop/ui-primitives';

import { IconProps } from './icon.interface';
import { IconMap } from './icon.util';
import { IconColors } from './icon-colors.const';

export const Icon = ({
  icon = 'IconShoppingCart',
  size = 36,
  color = 'white',
  stroke = 2,
  classNameIcon = '',
  classNameWrapper = '',
  displayWrapper = false,
  isDisabled = false,
  onClick,
}: IconProps): ReactElement => {
  const IconComponent = useMemo(() => {
    return IconMap[icon];
  }, [icon]);

  const iconClick = useCallback(() => {
    if (typeof onClick === 'function' && !isDisabled) {
      onClick();
    }
  }, [isDisabled, onClick]);

  const RenderIcon = useCallback(() => {
    return (
      <IconComponent
        size={size}
        color={IconColors?.[color]}
        stroke={stroke}
        className={`${classNameIcon} ${!displayWrapper && onClick ? 'cursor-pointer' : ''} ${
          isDisabled ? 'opacity-90 pointer-events-none' : ''
        }`}
        onClick={!displayWrapper && onClick ? iconClick : undefined}
      />
    );
  }, [
    size,
    IconComponent,
    color,
    classNameIcon,
    displayWrapper,
    stroke,
    isDisabled,
    iconClick,
    onClick,
  ]);

  if (displayWrapper) {
    return (
      <Box
        className={`${classNameWrapper} ${onClick ? 'cursor-pointer' : ''}`}
        onClick={iconClick ?? undefined}
      >
        <RenderIcon />
      </Box>
    );
  }
  return <RenderIcon />;
};
