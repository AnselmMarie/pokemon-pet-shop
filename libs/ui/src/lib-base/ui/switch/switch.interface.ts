import { GenericNonReturnType } from '@pokemon-pet-shop/typing';

import { IconType } from '../icon/icon.interface';

import { SwitchStatusEnum } from './switch.enum';

export interface SwitchProps {
  className?: string;
  name?: string;
  iconLeft?: IconType | null;
  iconRight?: IconType | null;
  defaultValue?: SwitchStatusEnum;
  val?: SwitchStatusEnum | null;
  isDisabled?: boolean;
  onLeftClick?: GenericNonReturnType;
  onRightClick?: GenericNonReturnType;
}

export interface SwitchButtonProps {
  className?: string;
}
