import type { IconColors, IconType } from '../icon';
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
export interface SwitchIconProps {
    icon: IconType;
    color: IconColors;
    isDisabled: boolean;
    onClick: () => void;
}
export interface SwitchIndicatorProps {
    positionStyle: string;
}
//# sourceMappingURL=switch.interface.d.ts.map