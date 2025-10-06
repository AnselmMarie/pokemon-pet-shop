// import { memo, ReactElement, useEffect } from 'react';

// import { ThemeTypeEnum, useThemeStore } from '@pokemon-pet-shop/store';
// import { IconTypeEnum, SwitchStatusEnum, UiSwitch } from '@pokemon-pet-shop/ui';
// import { variableThemeMode } from '@pokemon-pet-shop/ui/styles/var';
// import { isWebUtil } from '@pokemon-pet-shop/utils';

// import { SwitchProps } from './switch.theme.interface';

// const SwitchTheme = ({ className }: SwitchProps): ReactElement => {
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
//     <UiSwitch
//       className={className}
//       iconLeft={IconTypeEnum.ICON_SUN}
//       iconRight={IconTypeEnum.ICON_MOON}
//       val={theme === ThemeTypeEnum.LIGHT ? SwitchStatusEnum.ON : SwitchStatusEnum.OFF}
//       onLeftClick={turnLightOnClick}
//       onRightClick={turnDarkOnClick}
//     />
//   );
// };

// export default memo(SwitchTheme);
