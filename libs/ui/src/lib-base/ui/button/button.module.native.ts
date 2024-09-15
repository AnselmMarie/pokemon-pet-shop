import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    button: {
      borderRadius: 30,
      cursor: 'pointer',
      backgroundColor: 'none',
      // border: 0,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      paddingRight: 15,
    },
    buttonPrimary: {
      backgroundColor: 'blue',
      color: 'white',
    },
    buttonSecondary: {
      backgroundColor: 'white',
      color: 'blue',
    },
  });
