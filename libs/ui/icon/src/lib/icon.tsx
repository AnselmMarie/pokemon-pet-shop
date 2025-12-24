import { ReactElement, useCallback, useMemo } from 'react';

import { Box } from '@pokemon-pet-shop/ui-box';

import { IconProps } from './icon.interface';
import { IconMap } from './icon.util';
import { IconColors } from './icon.colors.const';

export const Icon = ({
  icon = 'IconShoppingCart',
  size = 36,
  fill = 'white',
  stroke = 'blue',
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
        fill={!isDisabled ? IconColors?.[fill] : ''}
        stroke={!isDisabled ? IconColors?.[stroke] : ''}
        className={`${classNameIcon} ${onClick ? 'cursor-pointer' : ''} ${
          isDisabled ? 'opacity-90 pointer-events-none' : ''
        }`}
        onClick={iconClick}
      />
    );
  }, [size, IconComponent, fill, stroke, classNameIcon, iconClick, isDisabled, onClick]);

  if (displayWrapper) {
    return (
      <Box
        className={classNameWrapper}
        // className={classNamesUtil(classNameWrapper, globalStyles.pointerCursor)}
      >
        <RenderIcon />
      </Box>
    );
  }
  return <RenderIcon />;
};
