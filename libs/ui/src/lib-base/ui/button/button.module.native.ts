import { StyleSheet } from 'react-native';

import {
  THEME_BLUE_600,
  THEME_NETURAL_100,
  THEME_RADIUS_PILL,
  THEME_SPACING_10,
  THEME_SPACING_15,
} from '../../styles/ts/variables';

export const styles = () =>
  StyleSheet.create({
    button: {
      borderRadius: THEME_RADIUS_PILL,
      cursor: 'pointer',
      backgroundColor: 'none',
      // border: 0,
      paddingTop: THEME_SPACING_10,
      paddingBottom: THEME_SPACING_10,
      paddingLeft: THEME_SPACING_15,
      paddingRight: THEME_SPACING_15,
    },
    buttonPrimary: {
      backgroundColor: THEME_BLUE_600,
      color: THEME_NETURAL_100,
    },
    buttonSecondary: {
      backgroundColor: THEME_NETURAL_100,
      color: THEME_BLUE_600,
    },
  });
