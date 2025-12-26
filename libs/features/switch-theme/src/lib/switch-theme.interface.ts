import type { Theme } from 'atomTheme/State';

import { IconType } from '@ui/icon';

export interface SwitchProps {
  className?: string;
  name?: string;
  iconLeft?: IconType;
  iconRight?: IconType;
  defaultValue?: Theme;
}
