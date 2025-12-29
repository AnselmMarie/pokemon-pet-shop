import { ReactElement } from 'react';

import { SwitchThemeItem } from './switch-theme-item';
import { SwitchItemProps } from './switch-theme.interface';

export const SwitchTheme = ({
  theme,
  className,
  onToggleThemeClick,
}: SwitchItemProps): ReactElement => {
  return (
    <SwitchThemeItem theme={theme} className={className} onToggleThemeClick={onToggleThemeClick} />
  );
};
