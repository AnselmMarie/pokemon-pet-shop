import { memo, ReactElement, useCallback, useMemo } from 'react';

import ElementLayout from '../element-layout/element.layout.view';

import { IconTypeEnum } from './icon.enum';
import { IconProps } from './icon.interface';
import { IconMap } from './icon.util';

const Icon = ({
  icon = IconTypeEnum.ICON_SHOPPING_CART,
  size = 36,
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
        color="red"
        stroke={2}
        className={classNameIcon}
        onClick={iconClick}
        // strokeLinejoin="miter" // override other SVG props
      />
    );
  }, [size, IconComponent, classNameIcon, iconClick]);

  if (displayWrapper) {
    return (
      <ElementLayout className={classNameWrapper} onClick={wrapperClick}>
        {renderIcon}
      </ElementLayout>
    );
  }
  return renderIcon;
};

export default memo(Icon);
