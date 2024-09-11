import { memo, ReactElement, useEffect } from 'react';

import { ThemeTypeEnum, useThemeStore } from '@pokemon-pet-shop/store';
import { IconTypeEnum, SwitchStatusEnum, UiSwitch } from '@pokemon-pet-shop/ui';

import { SwitchProps } from './switch.theme.interface';

const SwitchTheme = ({ className }: SwitchProps): ReactElement => {
  const { theme, updateTheme } = useThemeStore();

  const updateTheming = (newTheme: ThemeTypeEnum) => {
    updateTheme(newTheme);
    const el = document.querySelector('html');

    el?.classList.toggle(ThemeTypeEnum.DARK);
    el?.classList.toggle(ThemeTypeEnum.LIGHT);
  };

  const turnLightOnClick = () => {
    updateTheming(ThemeTypeEnum.LIGHT);
  };

  const turnDarkOnClick = () => {
    updateTheming(ThemeTypeEnum.DARK);
  };

  useEffect(() => {
    const el = document.querySelector('html');

    el?.classList.add(theme);
  }, [theme]);

  return (
    <UiSwitch
      className={className}
      iconLeft={IconTypeEnum.ICON_SUN}
      iconRight={IconTypeEnum.ICON_MOON}
      val={theme === ThemeTypeEnum.LIGHT ? SwitchStatusEnum.ON : SwitchStatusEnum.OFF}
      onLeftClick={turnLightOnClick}
      onRightClick={turnDarkOnClick}
    />
  );
};

export default memo(SwitchTheme);
