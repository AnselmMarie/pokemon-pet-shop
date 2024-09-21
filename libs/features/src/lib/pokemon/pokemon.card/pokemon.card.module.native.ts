import {
  THEME_FONT_10,
  THEME_FONT_13,
  THEME_FONT_18,
  THEME_NETURAL_100,
  THEME_RADIUS_8,
  THEME_SPACING_10,
  THEME_SPACING_15,
  THEME_SPACING_5,
  THEME_TYPE_BUG_600,
  THEME_TYPE_BUG_800,
  THEME_TYPE_DARK_600,
  THEME_TYPE_DARK_800,
  THEME_TYPE_DRAGON_600,
  THEME_TYPE_DRAGON_800,
  THEME_TYPE_ELECTRIC_600,
  THEME_TYPE_ELECTRIC_800,
  THEME_TYPE_FAIRY_600,
  THEME_TYPE_FAIRY_800,
  THEME_TYPE_FIGHTING_600,
  THEME_TYPE_FIGHTING_800,
  THEME_TYPE_FIRE_600,
  THEME_TYPE_FIRE_800,
  THEME_TYPE_FLYING_600,
  THEME_TYPE_FLYING_800,
  THEME_TYPE_GHOST_600,
  THEME_TYPE_GHOST_800,
  THEME_TYPE_GRASS_600,
  THEME_TYPE_GRASS_800,
  THEME_TYPE_GROUND_600,
  THEME_TYPE_GROUND_800,
  THEME_TYPE_ICE_600,
  THEME_TYPE_ICE_800,
  THEME_TYPE_NORMAL_600,
  THEME_TYPE_NORMAL_800,
  THEME_TYPE_POISON_600,
  THEME_TYPE_POISON_800,
  THEME_TYPE_PSYCHIC_600,
  THEME_TYPE_PSYCHIC_800,
  THEME_TYPE_ROCK_600,
  THEME_TYPE_ROCK_800,
  THEME_TYPE_STEEL_600,
  THEME_TYPE_STEEL_800,
  THEME_TYPE_WATER_600,
  THEME_TYPE_WATER_800,
} from '@pokemon-pet-shop/ui/styles/var';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    height: 154,
    display: 'flex',
    padding: THEME_SPACING_5,
    marginLeft: THEME_SPACING_15,
    marginRight: THEME_SPACING_15,
    marginBottom: THEME_SPACING_15,
    borderRadius: THEME_RADIUS_8,
    flexDirection: 'row',
    position: 'relative',
  },
  imgCardWrapper: {
    maxWidth: 115,
    borderRadius: THEME_RADIUS_8,
    padding: THEME_SPACING_5,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  price: {
    textAlign: 'center',
  },
  image: {
    width: 105,
    height: 105,
  },
  contentCardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    borderRadius: THEME_RADIUS_8,
    paddingTop: THEME_SPACING_10,
    paddingBottom: THEME_SPACING_10,
    paddingLeft: THEME_SPACING_10,
    paddingRight: THEME_SPACING_10,
  },
  cardSubHeadlineWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: THEME_SPACING_10,
  },
  cardSubHeadline: {
    fontSize: THEME_FONT_13,
  },
  cardHeadline: {
    fontSize: THEME_FONT_18,
  },
  btnWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: THEME_SPACING_15,
  },
  btn: {
    flex: 1,
  },
  /**
  Grass Theme
  **/
  grassThemeWrapper: {
    backgroundColor: THEME_TYPE_GRASS_600,
  },
  grassThemeContentCardWrapper: {
    backgroundColor: THEME_TYPE_GRASS_800,
  },
  grassThemeContentCardText: {
    color: THEME_NETURAL_100,
  },
  /**
  Bug Theme
  **/
  bugThemeWrapper: {
    backgroundColor: THEME_TYPE_BUG_600,
  },
  bugThemeContentCardWrapper: {
    backgroundColor: THEME_TYPE_BUG_800,
  },
  bugThemeContentCardText: {
    color: THEME_NETURAL_100,
  },
  /**
  Dark Theme
  **/
  darkThemeWrapper: {
    backgroundColor: THEME_TYPE_DARK_600,
  },
  darkThemeContentCardWrapper: {
    backgroundColor: THEME_TYPE_DARK_800,
  },
  darkThemeContentCardText: {
    color: THEME_NETURAL_100,
  },
  /**
  Dragon Theme
  **/
  dragonThemeWrapper: {
    backgroundColor: THEME_TYPE_DRAGON_600,
  },
  dragonThemeContentCardWrapper: {
    backgroundColor: THEME_TYPE_DRAGON_800,
  },
  dragonThemeContentCardText: {
    color: THEME_NETURAL_100,
  },
  /**
  Electric Theme
  **/
  electricThemeWrapper: {
    backgroundColor: THEME_TYPE_ELECTRIC_600,
  },
  electricThemeContentCardWrapper: {
    backgroundColor: THEME_TYPE_ELECTRIC_800,
  },
  electricThemeContentCardText: {
    color: THEME_NETURAL_100,
  },
  /**
  Fairy Theme
  **/
  fairyThemeWrapper: {
    backgroundColor: THEME_TYPE_FAIRY_600,
  },
  fairyThemeContentCardWrapper: {
    backgroundColor: THEME_TYPE_FAIRY_800,
  },
  fairyThemeContentCardText: {
    color: THEME_NETURAL_100,
  },
  /**
  Fighting Theme
  **/
  fightingThemeWrapper: {
    backgroundColor: THEME_TYPE_FIGHTING_600,
  },
  fightingThemeContentCardWrapper: {
    backgroundColor: THEME_TYPE_FIGHTING_800,
  },
  fightingThemeContentCardText: {
    color: THEME_NETURAL_100,
  },
  /**
  Fire Theme
  **/
  fireThemeWrapper: {
    backgroundColor: THEME_TYPE_FIRE_600,
  },
  fireThemeContentCardWrapper: {
    backgroundColor: THEME_TYPE_FIRE_800,
  },
  fireThemeContentCardText: {
    color: THEME_NETURAL_100,
  },
  /**
  Flying Theme
  **/
  flyingThemeWrapper: {
    backgroundColor: THEME_TYPE_FLYING_600,
  },
  flyingThemeContentCardWrapper: {
    backgroundColor: THEME_TYPE_FLYING_800,
  },
  flyingThemeContentCardText: {
    color: THEME_NETURAL_100,
  },
  /**
  Ghost Theme
  **/
  ghostThemeWrapper: {
    backgroundColor: THEME_TYPE_GHOST_600,
  },
  ghostThemeContentCardWrapper: {
    backgroundColor: THEME_TYPE_GHOST_800,
  },
  ghostThemeContentCardText: {
    color: THEME_NETURAL_100,
  },
  /**
  Ground Theme
  **/
  groundThemeWrapper: {
    backgroundColor: THEME_TYPE_GROUND_600,
  },
  groundThemeContentCardWrapper: {
    backgroundColor: THEME_TYPE_GROUND_800,
  },
  groundThemeContentCardText: {
    color: THEME_NETURAL_100,
  },
  /**
  Ice Theme
  **/
  iceThemeWrapper: {
    backgroundColor: THEME_TYPE_ICE_600,
  },
  iceThemeContentCardWrapper: {
    backgroundColor: THEME_TYPE_ICE_800,
  },
  iceThemeContentCardText: {
    color: THEME_NETURAL_100,
  },
  /**
  Normal Theme
  **/
  normalThemeWrapper: {
    backgroundColor: THEME_TYPE_NORMAL_600,
  },
  normalThemeContentCardWrapper: {
    backgroundColor: THEME_TYPE_NORMAL_800,
  },
  normalThemeContentCardText: {
    color: THEME_NETURAL_100,
  },
  /**
  Poison Theme
  **/
  poisonThemeWrapper: {
    backgroundColor: THEME_TYPE_POISON_600,
  },
  poisonThemeContentCardWrapper: {
    backgroundColor: THEME_TYPE_POISON_800,
  },
  poisonThemeContentCardText: {
    color: THEME_NETURAL_100,
  },
  /**
  Psychic Theme
  **/
  psychicThemeWrapper: {
    backgroundColor: THEME_TYPE_PSYCHIC_600,
  },
  psychicThemeContentCardWrapper: {
    backgroundColor: THEME_TYPE_PSYCHIC_800,
  },
  psychicThemeContentCardText: {
    color: THEME_NETURAL_100,
  },
  /**
  Rock Theme
  **/
  rockThemeWrapper: {
    backgroundColor: THEME_TYPE_ROCK_600,
  },
  rockThemeContentCardWrapper: {
    backgroundColor: THEME_TYPE_ROCK_800,
  },
  rockThemeContentCardText: {
    color: THEME_NETURAL_100,
  },
  /**
  Steel Theme
  **/
  steelThemeWrapper: {
    backgroundColor: THEME_TYPE_STEEL_600,
  },
  steelThemeContentCardWrapper: {
    backgroundColor: THEME_TYPE_STEEL_800,
  },
  steelThemeContentCardText: {
    color: THEME_NETURAL_100,
  },
  /**
  Water Theme
  **/
  waterThemeWrapper: {
    backgroundColor: THEME_TYPE_WATER_600,
  },
  waterThemeContentCardWrapper: {
    backgroundColor: THEME_TYPE_WATER_800,
  },
  waterThemeContentCardText: {
    color: THEME_NETURAL_100,
  },
});
