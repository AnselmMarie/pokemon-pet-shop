import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tagWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
  },
  leftAlign: {
    justifyContent: 'flex-start',
  },
  centerAlign: {
    justifyContent: 'center',
  },
  rightAlign: {
    justifyContent: 'flex-end',
  },
});
