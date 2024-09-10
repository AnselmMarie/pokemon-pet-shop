import { GenericNonReturnType } from '@pokemon-pet-shop/typing';

import { IconType } from '../icon/icon.interface';

export interface SwitchProps {
  className?: string;
  name?: string;
  iconLeft?: IconType | null;
  iconRight?: IconType | null;
  defaultValue?: boolean;
  isDisabled?: boolean;
  onLeftClick?: GenericNonReturnType;
  onRightClick?: GenericNonReturnType;
}
