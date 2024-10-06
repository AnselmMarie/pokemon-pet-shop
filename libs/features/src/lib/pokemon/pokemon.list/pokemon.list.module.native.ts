import {
  THEME_SPACING_15,
  THEME_SPACING_35,
  THEME_SPACING_45,
} from '@pokemon-pet-shop/ui/styles/var';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardListWrapper: {
    display: 'flex',
    alignContent: 'space-between',
    gap: THEME_SPACING_15,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  failureWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: THEME_SPACING_35,
    marginBottom: THEME_SPACING_35,
  },
  btnWrapper: {
    textAlign: 'center',
    marginLeft: THEME_SPACING_15,
    marginRight: THEME_SPACING_15,
    marginTop: THEME_SPACING_35,
    marginBottom: THEME_SPACING_45,
  },
});
