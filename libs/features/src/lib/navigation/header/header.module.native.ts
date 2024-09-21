import {
  THEME_NETURAL_100,
  THEME_NETURAL_200,
  THEME_RADIUS_CIRCLE,
  THEME_RADIUS_PILL,
  THEME_SPACING_10,
  THEME_SPACING_15,
  THEME_SPACING_5,
  THEME_YELLOW_600,
} from '@pokemon-pet-shop/ui/styles/var';
import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    headerWrapper: {
      justifyContent: 'space-between',
      paddingTop: THEME_SPACING_10,
      shadowOffset: {
        width: 2,
        height: 8,
      },
      shadowColor: '#062a49',
      shadowOpacity: 0.15,
      shadowRadius: 5,
      elevation: 2,
      // boxShadow: 0 2px 8px 1px rgba(6, 42, 73, 0.15),
      backgroundColor: THEME_NETURAL_100,
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: THEME_SPACING_15,
      paddingRight: THEME_SPACING_15,
    },
    nav: {
      display: 'flex',
      flexDirection: 'row',
      flexGrow: 1,
      marginTop: 0,
      marginBottom: THEME_SPACING_15,
      marginLeft: THEME_SPACING_15,
      marginRight: THEME_SPACING_15,
      paddingTop: THEME_SPACING_10,
      paddingBottom: THEME_SPACING_10,
      paddingLeft: THEME_SPACING_15,
      paddingRight: THEME_SPACING_15,
      alignItems: 'center',
      borderRadius: THEME_RADIUS_PILL,
      backgroundColor: THEME_NETURAL_200,
      // box-shadow: inset 0 3px 3px rgb(0 0 0 / 10%);
    },
    navTitle: {
      marginRight: THEME_SPACING_10,
    },
    iconCart: {
      marginLeft: THEME_SPACING_15,
    },
    logo: {},
    switchTheme: {
      display: 'none',
    },
    cartWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    counterWrapper: {
      borderRadius: THEME_RADIUS_CIRCLE,
      backgroundColor: THEME_YELLOW_600,
      minWidth: 23,
      minHeight: 23,
      textAlign: 'center',
      paddingTop: THEME_SPACING_5,
      paddingBottom: THEME_SPACING_5,
      paddingLeft: THEME_SPACING_10,
      paddingRight: THEME_SPACING_10,
      position: 'absolute',
      right: -11,
      top: -15,
      cursor: 'pointer',
    },
    counterText: {
      textAlign: 'center',
    },
  });
