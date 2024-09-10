import { ThemeTypeEnum } from '@pokemon-pet-shop/store';

import { IconType } from '../icon/icon.interface';

export interface SwitchProps {
  className?: string;
  name?: string;
  iconLeft?: IconType;
  iconRight?: IconType;
  defaultValue?: ThemeTypeEnum;
}
