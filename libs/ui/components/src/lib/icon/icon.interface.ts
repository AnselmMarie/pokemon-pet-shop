import { IconColors, IconType } from './icon.type';

export interface IconProps {
  icon?: IconType;
  size?: number;
  stroke?: number;
  color?: IconColors;
  classNameWrapper?: string;
  classNameIcon?: string;
  displayWrapper?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}
