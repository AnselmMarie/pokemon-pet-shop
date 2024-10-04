import { StyleSheet } from 'react-native';

import {
  THEME_BLUE_600,
  THEME_RADIUS_CIRCLE,
  THEME_SPACING_10,
  THEME_SPACING_15,
  THEME_SPACING_2,
  THEME_SPACING_5,
} from '../../styles/ts/variables';

export const styles = () =>
  StyleSheet.create({
    switchWrapper: {
      borderRadius: THEME_RADIUS_CIRCLE,
      backgroundColor: 'grey',
      width: 85,
      paddingTop: THEME_SPACING_15,
      paddingBottom: THEME_SPACING_15,
      paddingLeft: THEME_SPACING_10,
      paddingRight: THEME_SPACING_10,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    icon: {
      zIndex: 10,
    },
    iconLeft: {
      marginLeft: THEME_SPACING_5,
    },
    iconRight: {
      marginRight: THEME_SPACING_2,
    },
    iconCircle: {
      position: 'absolute',
      top: 6,
      width: 36,
      height: 36,
      backgroundColor: THEME_BLUE_600,
      zIndex: 0,
      borderRadius: THEME_RADIUS_CIRCLE,
    },
    circleLightPosition: {
      left: 8,
    },
    circleDarkPosition: {
      left: 42,
    },
  });
