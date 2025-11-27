import { ReactElement } from 'react';
import { useAtom } from 'jotai';

import { Switch } from '@ui/switch';

import { toggleThemeAtom } from 'atomTheme/State';

import { SwitchProps } from './switchTheme.interface';

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
    <Switch
      className={className}
      iconLeft="IconSun"
      iconRight="IconMoon"
      val={theme === 'light' ? 'ON' : 'OFF'}
      onLeftClick={toggleThemeClick}
      onRightClick={toggleThemeClick}
    />
  );
};
