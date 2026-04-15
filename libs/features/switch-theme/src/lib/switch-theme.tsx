import { ReactElement } from 'react';
import { useAtom } from 'jotai';

import { toggleThemeAtom } from 'atomTheme/State';

import { SwitchProps } from './switch-theme.interface';
import { SwitchThemeItem } from './switch-theme-item';

/**
 * SwitchTheme
 *
 * Small wrapper component that renders the UI switch bound to the global theme atom.
 * It reads the current theme value and dispatches the toggle action when the switch
 * is clicked. The component intentionally delegates visuals to the shared `Switch`
 * component and only wires up behavior.
 *
 * @param {SwitchProps} props - Component props
 * @param {string} [props.className] - Optional className passed down to the Switch
 * @returns {ReactElement} The themed Switch component
 *
 * @example
 * <SwitchTheme className="my-switch" />
 */
export const SwitchTheme = ({ className }: SwitchProps): ReactElement => {
  const [theme, toggleTheme] = useAtom(toggleThemeAtom);

  const toggleThemeClick = () => {
    toggleTheme();
  };

  return (
    <SwitchThemeItem theme={theme} className={className} onToggleThemeClick={toggleThemeClick} />
  );
};
