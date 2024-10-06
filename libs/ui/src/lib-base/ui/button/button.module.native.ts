import { StyleSheet } from 'react-native';

import {
  THEME_BLUE_600,
  THEME_FONT_13,
  THEME_FONT_24,
  THEME_GREEN_400,
  THEME_NETURAL_100,
  THEME_RADIUS_PILL,
  THEME_SPACING_10,
  THEME_SPACING_15,
  THEME_SPACING_30,
  THEME_SPACING_5,
} from '../../styles/ts/variables';

export const styles = () =>
  StyleSheet.create({
    button: {
      borderRadius: THEME_RADIUS_PILL,
      cursor: 'pointer',
      backgroundColor: 'none',
      padding: THEME_SPACING_5,
    },
    buttonPrimary: {
      backgroundColor: THEME_BLUE_600,
    },
    buttonPrimaryText: {
      color: THEME_NETURAL_100,
    },
    buttonSecondary: {
      backgroundColor: THEME_NETURAL_100,
    },
    buttonSecondaryText: {
      color: THEME_BLUE_600,
    },
    buttonSuccess: {
      backgroundColor: THEME_GREEN_400,
      color: THEME_NETURAL_100,
    },
    standard: {
      paddingTop: THEME_SPACING_10,
      paddingBottom: THEME_SPACING_10,
      paddingLeft: THEME_SPACING_15,
      paddingRight: THEME_SPACING_15,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
    standardText: {
      fontSize: THEME_FONT_13,
    },
    large: {
      minWidth: 230,
      height: 66,
      paddingTop: THEME_SPACING_10,
      paddingBottom: THEME_SPACING_10,
      paddingLeft: THEME_SPACING_30,
      paddingRight: THEME_SPACING_30,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
    largeText: {
      fontSize: THEME_FONT_24,
    },
    appendImage: {
      width: 22,
      marginRight: THEME_SPACING_5,
    },
    buttonInnerWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
