import { THEME_SPACING_15 } from '@pokemon-pet-shop/ui/styles/var';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardListWrapper: {
    display: 'flex',
    alignContent: 'space-between',
    gap: THEME_SPACING_15,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
