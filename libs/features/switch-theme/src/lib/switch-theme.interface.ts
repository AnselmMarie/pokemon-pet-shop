import type { Theme } from 'atomTheme/State';

import { IconType } from '@pokemon-pet-shop/ui-icon';

export interface SwitchProps {
  className?: string;
  name?: string;
  iconLeft?: IconType;
  iconRight?: IconType;
  defaultValue?: Theme;
}

export interface SwitchItemProps {
  theme: string;
  className?: string;
  onToggleThemeClick: () => void;
}
