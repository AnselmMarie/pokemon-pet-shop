import { ReactElement } from 'react';

import { Switch } from '@pokemon-pet-shop/ui-components';

import { SwitchItemProps } from './switch-theme.interface';

export const SwitchThemeItem = ({
  theme,
  className,
  onToggleThemeClick,
}: SwitchItemProps): ReactElement => {
  return (
    <Switch
      className={className}
      iconLeft={theme === 'light' ? 'IconSunFilled' : 'IconSun'}
      iconRight={theme === 'light' ? 'IconMoon' : 'IconMoonFilled'}
      val={theme === 'light' ? 'ON' : 'OFF'}
      onLeftClick={onToggleThemeClick}
      onRightClick={onToggleThemeClick}
    />
  );
};
