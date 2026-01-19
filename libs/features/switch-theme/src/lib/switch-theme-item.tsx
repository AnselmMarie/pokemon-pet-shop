import { ReactElement } from 'react';

import { Switch } from '@pokemon-pet-shop/ui-switch';

import { SwitchItemProps } from './switch-theme.interface';

export const SwitchThemeItem = ({
  theme,
  className,
  onToggleThemeClick,
}: SwitchItemProps): ReactElement => {
  return (
    <Switch
      className={className}
      iconLeft="IconSun"
      iconRight="IconMoon"
      val={theme === 'light' ? 'ON' : 'OFF'}
      onLeftClick={onToggleThemeClick}
      onRightClick={onToggleThemeClick}
    />
  );
};
