import { GenericNonReturnType } from '@pokemon-pet-shop/typing';

import { ButtonSizeEnum, ButtonTypeEnum } from './button.enum';

export interface ButtonProps {
  type?: ButtonTypeEnum;
  text?: string | null;
  classNameText: string;
  className?: any;
  size?: ButtonSizeEnum;
  appendIcon?: string;
  appendImage?: string;
  timerText?: string;
  timerStyle?: string;
  isDisabled?: boolean;
  isSuccess?: boolean;
  onClick?: GenericNonReturnType;
}
