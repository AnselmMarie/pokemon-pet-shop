import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  cartContent: {
    padding: 15,
    height: '86%',
    flexGrow: 1,
  },
  middleRow: {
    flex: 1,
  },
  cardContentRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
  },
  image: {
    width: 115,
    height: 115,
  },
  sep: {
    backgroundColor: '#666',
    width: '100%',
    height: 1,
    marginTop: 25,
    marginBottom: 25,
  },
  totalContent: {
    height: 60,
    backgroundColor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
});
