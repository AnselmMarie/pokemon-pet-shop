import { ReactElement, useCallback, useMemo } from 'react';

// import { classNamesUtil } from '@pokemon-pet-shop/utils';
import { Box } from '@ui/box';

// import { globalStyles } from '../../styles/css/global.module';
// import { THEME_BLUE_400, THEME_NETURAL_600 } from '../../styles/ts/variables';

// import { IconTypeEnum } from './icon.type';
import { IconProps } from './icon.interface';
import { IconMap } from './icon.util';

export const Icon = ({
  icon = 'IconShoppingCart',
  size = 36,
  fill = 'white',
  stroke = 'blue', //THEME_BLUE_400,
  classNameIcon = null,
  classNameWrapper = null,
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
    // const disabledStyles = isDisabled ? globalStyles.disabledElement : '';
    // const clickableStyles = onClick ? globalStyles.pointerCursor : '';

    return (
      <IconComponent
        size={size}
        fill={!isDisabled ? fill || 'white' : ''}
        stroke={!isDisabled ? stroke : ''}
        className={classNameIcon}
        // fill={!isDisabled ? fill || 'white' : THEME_NETURAL_600}
        // stroke={!isDisabled ? stroke : THEME_NETURAL_600}
        // className={classNamesUtil(
        //   classNameIcon,
        //   clickableStyles,
        //   disabledStyles
        // )}
        onClick={iconClick}
      />
    );
  }, [
    size,
    IconComponent,
    fill,
    stroke,
    classNameIcon,
    iconClick,
    isDisabled,
    // onClick,
  ]);

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
