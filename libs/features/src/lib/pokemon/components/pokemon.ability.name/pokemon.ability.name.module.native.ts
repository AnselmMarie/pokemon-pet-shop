import {
  THEME_FONT_13,
  THEME_NETURAL_100,
  THEME_RADIUS_CIRCLE,
  THEME_SPACING_10,
  THEME_SPACING_5,
  THEME_TYPE_BUG_400,
  THEME_TYPE_BUG_900,
  THEME_TYPE_DARK_400,
  THEME_TYPE_DARK_900,
  THEME_TYPE_DRAGON_400,
  THEME_TYPE_DRAGON_900,
  THEME_TYPE_ELECTRIC_400,
  THEME_TYPE_ELECTRIC_900,
  THEME_TYPE_FAIRY_400,
  THEME_TYPE_FAIRY_900,
  THEME_TYPE_FIGHTING_400,
  THEME_TYPE_FIGHTING_900,
  THEME_TYPE_FIRE_400,
  THEME_TYPE_FIRE_900,
  THEME_TYPE_FLYING_400,
  THEME_TYPE_FLYING_900,
  THEME_TYPE_GHOST_400,
  THEME_TYPE_GHOST_900,
  THEME_TYPE_GRASS_400,
  THEME_TYPE_GRASS_900,
  THEME_TYPE_GROUND_400,
  THEME_TYPE_GROUND_900,
  THEME_TYPE_ICE_400,
  THEME_TYPE_ICE_900,
  THEME_TYPE_NORMAL_400,
  THEME_TYPE_NORMAL_900,
  THEME_TYPE_POISON_400,
  THEME_TYPE_POISON_900,
  THEME_TYPE_PSYCHIC_400,
  THEME_TYPE_PSYCHIC_900,
  THEME_TYPE_ROCK_400,
  THEME_TYPE_ROCK_900,
  THEME_TYPE_WATER_400,
  THEME_TYPE_WATER_900,
} from '@pokemon-pet-shop/ui/styles/var';
import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    atkWrapper: {
      display: 'flex',
      flexDirection: 'row',
      height: 17,
      width: '100%',
      alignItems: 'center',
      marginBottom: THEME_SPACING_10,
    },
    atkLine: {},
    atkCircle: {
      height: 17,
      width: 17,
      borderRadius: THEME_RADIUS_CIRCLE,
      marginRight: THEME_SPACING_5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    atkText: {
      fontSize: THEME_FONT_13,
      color: THEME_NETURAL_100,
    },
    /**
Grass Theme
**/
    grassThemeAtkLine: {
      backgroundColor: THEME_TYPE_GRASS_400,
    },
    grassThemeAtkCircle: {
      backgroundColor: THEME_TYPE_GRASS_900,
    },

    /**
Bug Theme
**/
    bugThemeAtkLine: {
      backgroundColor: THEME_TYPE_BUG_400,
    },
    bugThemeAtkCircle: {
      backgroundColor: THEME_TYPE_BUG_900,
    },

    /**
Dark Theme
**/
    darkThemeAtkLine: {
      backgroundColor: THEME_TYPE_DARK_400,
    },
    darkThemeAtkCircle: {
      backgroundColor: THEME_TYPE_DARK_900,
    },

    /**
Dragon Theme
**/
    dragonThemeAtkLine: {
      backgroundColor: THEME_TYPE_DRAGON_400,
    },
    dragonThemeAtkCircle: {
      backgroundColor: THEME_TYPE_DRAGON_900,
    },

    /**
Electric Theme
**/
    electricThemeAtkLine: {
      backgroundColor: THEME_TYPE_ELECTRIC_400,
    },
    electricThemeAtkCircle: {
      backgroundColor: THEME_TYPE_ELECTRIC_900,
    },

    /**
Fairy Theme
**/
    fairyThemeAtkLine: {
      backgroundColor: THEME_TYPE_FAIRY_400,
    },
    fairyThemeAtkCircle: {
      backgroundColor: THEME_TYPE_FAIRY_900,
    },

    /**
Fighting Theme
**/
    fightingThemeAtkLine: {
      backgroundColor: THEME_TYPE_FIGHTING_400,
    },
    fightingThemeAtkCircle: {
      backgroundColor: THEME_TYPE_FIGHTING_900,
    },

    /**
Fire Theme
**/
    fireThemeAtkLine: {
      backgroundColor: THEME_TYPE_FIRE_400,
    },
    fireThemeAtkCircle: {
      backgroundColor: THEME_TYPE_FIRE_900,
    },

    /**
Flying Theme
**/
    flyingThemeAtkLine: {
      backgroundColor: THEME_TYPE_FLYING_400,
    },
    flyingThemeAtkCircle: {
      backgroundColor: THEME_TYPE_FLYING_900,
    },

    /**
Ghost Theme
**/
    ghostThemeAtkLine: {
      backgroundColor: THEME_TYPE_GHOST_400,
    },
    ghostThemeAtkCircle: {
      backgroundColor: THEME_TYPE_GHOST_900,
    },

    /**
Ground Theme
**/
    groundThemeAtkLine: {
      backgroundColor: THEME_TYPE_GROUND_400,
    },
    groundThemeAtkCircle: {
      backgroundColor: THEME_TYPE_GROUND_900,
    },

    /**
Ice Theme
**/
    iceThemeAtkLine: {
      backgroundColor: THEME_TYPE_ICE_400,
    },
    iceThemeAtkCircle: {
      backgroundColor: THEME_TYPE_ICE_900,
    },

    /**
Normal Theme
**/
    normalThemeAtkLine: {
      backgroundColor: THEME_TYPE_NORMAL_400,
    },
    normalThemeAtkCircle: {
      backgroundColor: THEME_TYPE_NORMAL_900,
    },

    /**
Poison Theme
**/
    poisonThemeAtkLine: {
      backgroundColor: THEME_TYPE_POISON_400,
    },
    poisonThemeAtkCircle: {
      backgroundColor: THEME_TYPE_POISON_900,
    },

    /**
Psychic Theme
**/
    psychicThemeAtkLine: {
      backgroundColor: THEME_TYPE_PSYCHIC_400,
    },
    psychicThemeAtkCircle: {
      backgroundColor: THEME_TYPE_PSYCHIC_900,
    },

    /**
Rock Theme
**/
    rockThemeAtkLine: {
      backgroundColor: THEME_TYPE_ROCK_400,
    },
    rockThemeAtkCircle: {
      backgroundColor: THEME_TYPE_ROCK_900,
    },

    /**
Steel Theme
**/
    steelThemeAtkLine: {
      backgroundColor: THEME_TYPE_ROCK_400,
    },
    steelThemeAtkCircle: {
      backgroundColor: THEME_TYPE_ROCK_900,
    },

    /**
Water Theme
**/
    waterThemeAtkLine: {
      backgroundColor: THEME_TYPE_WATER_400,
    },
    waterThemeAtkCircle: {
      backgroundColor: THEME_TYPE_WATER_900,
    },
  });
