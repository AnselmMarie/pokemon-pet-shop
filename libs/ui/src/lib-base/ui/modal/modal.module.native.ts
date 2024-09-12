import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
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
