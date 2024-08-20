import { IconType } from '../icon/icon.interface';

import { ThemeModeEnum } from './switch.enum';

export interface SwitchProps {
  className?: any;
  name?: string;
  iconLeft?: IconType;
  iconRight?: IconType;
  defaultValue?: ThemeModeEnum;
}
