import { GenericNonReturnType } from '@pokemon-pet-shop/typing';

import { ButtonTypeEnum } from './button.enum';

export interface ButtonProps {
  type?: ButtonTypeEnum;
  className?: any;
  onClick?: GenericNonReturnType;
}
