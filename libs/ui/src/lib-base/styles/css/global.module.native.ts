import { StyleSheet } from 'react-native';

import { THEME_NETURAL_600 } from '../ts/variables';

export const globalStyles = (varThemeMode: any) =>
  StyleSheet.create({
    fontBold: {
      fontWeight: 'bold',
    },
    disabledElementText: {
      color: THEME_NETURAL_600,
    },
    disabledElementBg: {
      color: varThemeMode?.THEME_NETURAL_100_MODE,
      backgroundColor: THEME_NETURAL_600,
    },
  });
