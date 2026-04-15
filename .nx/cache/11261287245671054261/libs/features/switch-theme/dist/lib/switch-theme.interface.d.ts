import type { Theme } from 'atomTheme/State';
import { IconType } from '@pokemon-pet-shop/ui-components';
export interface SwitchProps {
    className?: string;
    name?: string;
    iconLeft?: IconType;
    iconRight?: IconType;
    defaultValue?: Theme;
}
export interface SwitchItemProps {
    theme: string;
    className?: string;
    onToggleThemeClick: () => void;
}
//# sourceMappingURL=switch-theme.interface.d.ts.map