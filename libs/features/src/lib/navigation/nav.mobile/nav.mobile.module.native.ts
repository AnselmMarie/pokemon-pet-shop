import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    height: '94%',
    width: '100%',
  },
  navWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'column',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  switchWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
