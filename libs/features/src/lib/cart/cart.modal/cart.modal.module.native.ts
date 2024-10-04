import { THEME_SPACING_15, THEME_SPACING_25 } from '@pokemon-pet-shop/ui/styles/var';
import { StyleSheet } from 'react-native';

export const styles = (varThemeMode: any) =>
  StyleSheet.create({
    modal: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    },
    cartContent: {
      padding: THEME_SPACING_15,
      height: '86%',
      flexGrow: 1,
    },
    middleRow: {
      flex: 1,
    },
    cardContentRow: {
      display: 'flex',
      flexDirection: 'row',
      gap: THEME_SPACING_15,
    },
    image: {
      width: 115,
      height: 115,
    },
    sep: {
      backgroundColor: varThemeMode?.THEME_NETURAL_400_MODE,
      width: '100%',
      height: 1,
      marginTop: THEME_SPACING_25,
      marginBottom: THEME_SPACING_25,
    },
    totalWrapper: {
      height: 60,
      backgroundColor: varThemeMode?.THEME_NETURAL_200_MODE,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: THEME_SPACING_15,
    },
  });
