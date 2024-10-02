import { memo, ReactElement, useCallback, useMemo } from 'react';

import { classNamesUtil } from '@pokemon-pet-shop/utils';

import { globalStyles } from '../../styles/css/global.module';
import { THEME_NETURAL_600 } from '../../styles/ts/variables';
import { UiElementLayout } from '../element.layout';

import { IconColorEnum, IconTypeEnum } from './icon.enum';
import { IconProps } from './icon.interface';
import { IconMap } from './icon.util';

const Icon = ({
  icon = IconTypeEnum.ICON_SHOPPING_CART,
  size = 36,
  color = IconColorEnum.BLUE,
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
    if (!displayWrapper && typeof onClick === 'function' && !isDisabled) {
      onClick();
    }
  }, [displayWrapper, onClick, isDisabled]);

  const wrapperClick = useCallback(() => {
    if (isDisabled && typeof onClick === 'function' && !isDisabled) {
      onClick();
    }
  }, [onClick, isDisabled]);

  const renderIcon = useMemo(() => {
    const disabledStyles = isDisabled ? globalStyles.disabledElement : '';
    const clickableStyles = onClick ? globalStyles.pointerCursor : '';

    return (
      <IconComponent
        size={size}
        color={isDisabled ? THEME_NETURAL_600 : color}
        className={classNamesUtil(classNameIcon, clickableStyles, disabledStyles)}
        onClick={iconClick}
      />
    );
  }, [size, IconComponent, color, classNameIcon, isDisabled, iconClick, onClick]);

  if (displayWrapper) {
    return (
      <UiElementLayout
        className={classNamesUtil(classNameWrapper, globalStyles.pointerCursor)}
        onClick={wrapperClick}
      >
        {renderIcon}
      </UiElementLayout>
    );
  }
  return renderIcon;
};

export default memo(Icon);
