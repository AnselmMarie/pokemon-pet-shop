import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  switchWrapper: {
    borderRadius: 100,
    backgroundColor: 'grey',
    display: 'flex',
    width: 85,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    flexDirection: 'row',
  },
  icon: {
    zIndex: 10,
  },
  iconLeft: {
    marginLeft: 6,
  },
  iconRight: {
    marginRight: 3,
  },
  iconCircle: {
    position: 'absolute',
    top: 6,
    width: 36,
    height: 36,
    backgroundColor: 'blue',
    zIndex: 0,
    borderRadius: 100,
    // transition: left 100ms ease-in-out;
  },
  circleLightPosition: {
    left: 8,
  },
  circleDarkPosition: {
    left: 42,
  },
});