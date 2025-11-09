import { ReactElement } from 'react';
import { useAtom } from 'jotai';

import { Switch } from '@ui/switch';
import { toggleThemeAtom } from '@features/atomTheme';

// import { variableThemeMode } from '@pokemon-pet-shop/ui/styles/var';
// import { isWebUtil } from '@pokemon-pet-shop/utils';

import { SwitchProps } from './switchTheme.interface';

export const SwitchTheme = ({ className }: SwitchProps): ReactElement => {
  const [theme, toggleTheme] = useAtom(toggleThemeAtom);

  // const updateTheming = (newTheme: ThemeTypeEnum) => {
  //   const varThemeMode = variableThemeMode(newTheme);
  //   updateTheme(newTheme, varThemeMode);
  //   if (isWebUtil()) {
  //     const el = document.querySelector('html');
  //     el?.setAttribute('data-theme', newTheme);
  //   }
  // };

  const toggleThemeClick = () => {
    toggleTheme();
  };

  // useEffect(() => {
  //   if (isWebUtil()) {
  //     const el = document.querySelector('html');
  //     el?.setAttribute('data-theme', theme);
  //   }
  // }, [theme]);

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
