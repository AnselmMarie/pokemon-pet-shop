import { StyleSheet } from 'react-native';

import {
  THEME_FONT_24,
  THEME_RADIUS_CIRCLE,
  THEME_SPACING_15,
  THEME_SPACING_5,
} from '../../styles/ts/variables';

export const styles = (varThemeMode: any) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: varThemeMode?.THEME_NETURAL_100_MODE,
    },
    modal: {
      width: '100%',
      height: '100%',
      backgroundColor: varThemeMode?.THEME_NETURAL_100_MODE,
      position: 'relative',
    },
    center: {
      justifyContent: 'center',
    },
    left: {
      justifyContent: 'flex-start',
    },
    right: {
      justifyContent: 'flex-end',
    },
    relativeDropdownHeadline: {
      display: 'flex',
      position: 'relative',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: THEME_SPACING_15,
      paddingLeft: THEME_SPACING_15,
      paddingBottom: THEME_SPACING_15,
    },
    absoluteDropdownHeadline: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'absolute',
      padding: THEME_SPACING_15,
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 10,
    },
    modalHeadline: {
      fontSize: THEME_FONT_24,
      fontWeight: 'bold',
      color: varThemeMode?.THEME_NETURAL_900_MODE,
    },
    iconWrapper: {
      backgroundColor: varThemeMode?.THEME_NETURAL_100_MODE,
      borderRadius: THEME_RADIUS_CIRCLE,
      padding: THEME_SPACING_5,
      display: 'flex',
    },
  });
