import { StyleSheet } from 'react-native';

export const styles = (varThemeMode: any) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: varThemeMode?.THEME_NETURAL_100_MODE,
    },
    body: {
      backgroundColor: varThemeMode?.THEME_BLUE_100_MODE,
    },
  });
