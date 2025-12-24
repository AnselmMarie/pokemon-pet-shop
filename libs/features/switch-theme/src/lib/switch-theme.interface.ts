import type { Theme } from 'atom-theme/State';

import { IconType } from '@pokemon-pet-shop/ui-icon';

export interface SwitchProps {
  className?: string;
  name?: string;
  iconLeft?: IconType;
  iconRight?: IconType;
  defaultValue?: Theme;
}
