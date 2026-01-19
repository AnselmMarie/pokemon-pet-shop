import { IconType } from '@pokemon-pet-shop/ui-icon';

import type { ButtonSize, ButtonType } from './button.type';

export interface ButtonProps {
  type?: ButtonType;
  text?: string | null;
  classNameText?: string;
  classNameIcon?: string;
  className?: string;
  size?: ButtonSize;
  appendIcon?: IconType;
  appendImage?: string | null;
  timerText?: string;
  timerStyle?: string | null;
  isDisabled?: boolean;
  isSuccess?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}
