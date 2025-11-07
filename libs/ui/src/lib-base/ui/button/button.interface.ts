import { GenericNonReturnType } from '@pokemon-pet-shop/typing';

import { ButtonSizeEnum, ButtonTypeEnum } from './button.enum';

export interface ButtonProps {
  type?: ButtonTypeEnum;
  text?: string | null;
  classNameText?: string;
  classNameIcon?: string;
  className?: any;
  size?: ButtonSizeEnum;
  appendIcon?: string | null;
  appendImage?: string | null;
  timerText?: string;
  timerStyle?: string | null;
  isDisabled?: boolean;
  isSuccess?: boolean;
  isLoading?: boolean;
  onClick?: GenericNonReturnType;
}
