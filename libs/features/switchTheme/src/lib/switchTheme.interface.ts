import type { Theme } from '@features/atomTheme';

import { IconType } from '@ui/icon';

export interface SwitchProps {
  className?: string;
  name?: string;
  iconLeft?: IconType;
  iconRight?: IconType;
  defaultValue?: Theme;
}
