// import { ReactElement, useEffect } from 'react';

// // import { ThemeTypeEnum, useThemeStore } from '@pokemon-pet-shop/store';
// import { Switch } from '@ui/switch';
// // import { variableThemeMode } from '@pokemon-pet-shop/ui/styles/var';
// // import { isWebUtil } from '@pokemon-pet-shop/utils';

// import { SwitchProps } from './switchTheme.interface';

// export const SwitchTheme = ({ className }: SwitchProps): ReactElement => {
//   const { theme, updateTheme } = useThemeStore();
//   const updateTheming = (newTheme: ThemeTypeEnum) => {
//     const varThemeMode = variableThemeMode(newTheme);
//     updateTheme(newTheme, varThemeMode);
//     if (isWebUtil()) {
//       const el = document.querySelector('html');
//       el?.setAttribute('data-theme', newTheme);
//     }
//   };
//   const turnLightOnClick = () => {
//     updateTheming(ThemeTypeEnum.LIGHT);
//   };
//   const turnDarkOnClick = () => {
//     updateTheming(ThemeTypeEnum.DARK);
//   };
//   useEffect(() => {
//     if (isWebUtil()) {
//       const el = document.querySelector('html');
//       el?.setAttribute('data-theme', theme);
//     }
//   }, [theme]);
//   return (
//     <Switch
//       className={className}
//       iconLeft="IconSun"
//       iconRight="IconMoon"
//       val={theme === ThemeTypeEnum.LIGHT ? 'ON' : 'OFF'}
//       onLeftClick={turnLightOnClick}
//       onRightClick={turnDarkOnClick}
//     />
//   );
// };
