import { StyleSheet } from 'react-native';

import { THEME_NETURAL_100, THEME_SPACING_15 } from '../../styles/ts/variables';

export const styles = () =>
  StyleSheet.create({
    modal: {
      width: '100%',
      height: '100%',
      backgroundColor: THEME_NETURAL_100,
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
  });
