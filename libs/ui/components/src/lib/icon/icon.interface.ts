import { IconColors, IconType } from './icon.type';

export interface IconProps {
  icon?: IconType;
  size?: number;
  fill?: IconColors;
  stroke?: IconColors;
  classNameWrapper?: string;
  classNameIcon?: string;
  displayWrapper?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}
