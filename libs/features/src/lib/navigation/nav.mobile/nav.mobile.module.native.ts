import { THEME_SPACING_15 } from '@pokemon-pet-shop/ui/styles/var';
import { Dimensions, StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    innerModal: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: Dimensions.get('window').height - 150,
      flex: 1,
    },
    navWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      flex: 1,
      flexDirection: 'column',
      marginLeft: THEME_SPACING_15,
      marginRight: THEME_SPACING_15,
      marginBottom: THEME_SPACING_15,
    },
    switchWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });
