import type { IconType } from '@ui/icon';

import { SwitchStatus } from './switch.type';

export interface SwitchButtonProps {
  className?: string;
}

export interface SwitchProps extends SwitchButtonProps {
  classNameContainer?: string;
  defaultValue?: SwitchStatus;
  val?: SwitchStatus | null;
  isDisabled?: boolean;
  iconLeft?: IconType | null;
  iconRight?: IconType | null;
  onChange?: (val: SwitchStatus) => void;
  onLeftClick?: () => void;
  onRightClick?: () => void;
}
