import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerWrapper: {
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    paddingRight: 0,
    // boxShadow: 0 2px 8px 1px rgba(6, 42, 73, 0.15),
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
  },
  nav: {
    width: '100%',
    display: 'flex',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'grey',
  },
  navTitle: {
    marginRight: 10,
  },
  iconCart: {
    marginLeft: 15,
  },
  logo: {
    display: 'none',
  },
  switchTheme: {
    display: 'none',
  },
  iconMenu: {},
});
