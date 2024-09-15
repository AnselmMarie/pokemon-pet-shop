import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    atkWrapper: {
      display: 'flex',
      flexDirection: 'row',
      height: 17,
      width: '100%',
      alignItems: 'center',
      marginBottom: 5,
    },
    atkLine: {},
    atkCircle: {
      height: 17,
      width: 17,
      borderRadius: 100,
      marginRight: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    atkText: {
      fontSize: 13,
    },
    /**
  Grass Theme
  **/
    grassThemeWrapper: {
      backgroundColor: 'green',
    },
    // contentCardWrapper: {
    //   color: 'white',
    //   backgroundColor: 'darkgreen',
    // },
    // atkLine: {
    //   backgroundColor: 'greenyellow',
    // },
    // atkCircle: {
    //   backgroundColor: 'lightgreen',
    // },
  });
