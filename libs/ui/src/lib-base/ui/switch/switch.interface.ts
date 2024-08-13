import { IconType } from '../icon/icon.interface';

export interface SwitchProps {
  name?: string;
  iconLeft?: IconType;
  iconRight?: IconType;
  defaultValue?: boolean | null;
}
