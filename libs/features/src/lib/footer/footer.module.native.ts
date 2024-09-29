import { THEME_SPACING_10, THEME_SPACING_5 } from '@pokemon-pet-shop/ui/styles/var';
import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    footerWrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
    githubWrapper: {
      display: 'flex',
    },
    githubIcon: {
      marginRight: THEME_SPACING_5,
    },
    footerDivider: {
      paddingLeft: THEME_SPACING_10,
      paddingRight: THEME_SPACING_10,
    },
  });
