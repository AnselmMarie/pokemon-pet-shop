import { GenericNonReturnType } from '@pokemon-pet-shop/typing';

import { IconTypeEnum } from './icon.enum';

export type IconType = IconTypeEnum | null;

export interface IconProps {
  icon?: IconType;
  size?: number;
  classNameWrapper?: any;
  classNameIcon?: any;
  displayWrapper?: boolean;
  isDisabled?: boolean;
  onClick?: GenericNonReturnType;
}
