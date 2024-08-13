import { IconType } from '../icon/icon.interface';

import { ThemeModeEnum } from './switch.enum';

export interface SwitchProps {
  name?: string;
  iconLeft?: IconType;
  iconRight?: IconType;
  defaultValue?: ThemeModeEnum;
}
