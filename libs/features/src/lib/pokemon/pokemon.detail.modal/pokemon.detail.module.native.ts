import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    cardWrapper: {
      flex: 1,
      height: 154,
      display: 'flex',
      padding: 5,
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 15,
      borderRadius: 10,
      flexDirection: 'row',
      position: 'relative',
      backgroundColor: 'purple',
    },
    imgCardWrapper: {
      maxWidth: 115,
      backgroundColor: 'red',
      borderRadius: 10,
      padding: 5,
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
    },
    price: {
      textAlign: 'center',
    },
    image: {
      width: 105,
      height: 105,
    },
    contentCardWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: 1,
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 10,
      paddingRight: 10,
    },
    cardSubHeadlineWrapper: {
      display: 'flex',
      backgroundColor: 'red',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardSubHeadline: {
      fontSize: 10,
    },
    cardHeadline: {
      fontSize: 18,
    },
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
    btnWrapper: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'green',
      gap: 15,
    },
    btn: {
      flex: 1,
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
