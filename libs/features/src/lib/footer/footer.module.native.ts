import { THEME_SPACING_10 } from '@pokemon-pet-shop/ui/styles/var';
import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    footerWrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
    footerDivider: {
      paddingLeft: THEME_SPACING_10,
      paddingRight: THEME_SPACING_10,
    },
  });
