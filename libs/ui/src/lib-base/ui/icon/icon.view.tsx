import { memo, ReactElement, useCallback, useMemo } from 'react';

import { classNamesUtil } from '@pokemon-pet-shop/utils';

import { UiElementLayout } from '../element.layout';

import { IconTypeEnum } from './icon.enum';
import { IconProps } from './icon.interface';
import styles from './icon.module.css';
import { IconMap } from './icon.util';

const Icon = ({
  icon = IconTypeEnum.ICON_SHOPPING_CART,
  size = 36,
  color = 'none',
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
    return (
      <IconComponent
        size={size}
        className={classNamesUtil(classNameIcon, onClick ? styles.icon : '')}
        onClick={iconClick}
      />
    );
  }, [size, IconComponent, classNameIcon, iconClick, onClick]);

  if (displayWrapper) {
    return (
      <UiElementLayout
        className={classNamesUtil(classNameWrapper, styles.iconWrapper)}
        onClick={wrapperClick}
      >
        {renderIcon}
      </UiElementLayout>
    );
  }
  return renderIcon;
};

export default memo(Icon);
