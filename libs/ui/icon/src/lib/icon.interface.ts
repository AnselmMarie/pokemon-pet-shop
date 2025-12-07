import { IconType } from './icon.type';

export interface IconProps {
  icon?: IconType;
  size?: number;
  fill?: string;
  stroke?: string;
  classNameWrapper?: string;
  classNameIcon?: string;
  displayWrapper?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}
