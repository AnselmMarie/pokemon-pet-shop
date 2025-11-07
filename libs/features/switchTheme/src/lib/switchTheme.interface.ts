// import { ThemeTypeEnum } from '@pokemon-pet-shop/store';
import { IconType } from '@ui/icon';

export interface SwitchProps {
  className?: string;
  name?: string;
  iconLeft?: IconType;
  iconRight?: IconType;
  defaultValue?: boolean; //ThemeTypeEnum;
}
