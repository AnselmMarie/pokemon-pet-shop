import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    modal: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
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
      paddingRight: 15,
      paddingLeft: 15,
      paddingBottom: 15,
    },
    absoluteDropdownHeadline: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'absolute',
      padding: 15,
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 10,
    },
  });
