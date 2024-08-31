import { GenericNonReturnType } from '@pokemon-pet-shop/typing';

import { ButtonTypeEnum } from './button.enum';

export interface ButtonProps {
  type?: ButtonTypeEnum;
  text?: string | null;
  className?: any;
  onClick?: GenericNonReturnType;
}
