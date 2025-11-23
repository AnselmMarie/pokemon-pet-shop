import { StyleSheet } from 'react-native';

import { THEME_SPACING_15 } from '../../../styles/ts/variables';

export const styles = StyleSheet.create({
  tagWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: THEME_SPACING_15,
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
