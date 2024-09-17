import { GenericNonReturnType } from '@pokemon-pet-shop/typing';

import { ButtonSizeEnum, ButtonTypeEnum } from './button.enum';

export interface ButtonProps {
  type?: ButtonTypeEnum;
  text?: string | null;
  className?: any;
  size?: ButtonSizeEnum;
  isDisabled?: boolean;
  onClick?: GenericNonReturnType;
}
