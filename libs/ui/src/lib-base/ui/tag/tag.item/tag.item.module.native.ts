import { StyleSheet } from 'react-native';

import {
  THEME_RADIUS_PILL,
  THEME_SPACING_10,
  THEME_SPACING_15,
  THEME_TYPE_BUG_400,
  THEME_TYPE_DARK_400,
  THEME_TYPE_DRAGON_400,
  THEME_TYPE_ELECTRIC_400,
  THEME_TYPE_FAIRY_400,
  THEME_TYPE_FIGHTING_400,
  THEME_TYPE_FIRE_400,
  THEME_TYPE_FLYING_400,
  THEME_TYPE_GHOST_400,
  THEME_TYPE_GRASS_400,
  THEME_TYPE_GROUND_400,
  THEME_TYPE_ICE_400,
  THEME_TYPE_NORMAL_400,
  THEME_TYPE_POISON_400,
  THEME_TYPE_PSYCHIC_400,
  THEME_TYPE_ROCK_400,
  THEME_TYPE_STEEL_400,
  THEME_TYPE_WATER_400,
} from '../../../styles/ts/variables';

export const styles = (varThemeMode: any) =>
  StyleSheet.create({
    tag: {
      borderRadius: THEME_RADIUS_PILL,
      paddingTop: THEME_SPACING_10,
      paddingBottom: THEME_SPACING_10,
      paddingLeft: THEME_SPACING_15,
      paddingRight: THEME_SPACING_15,
      color: varThemeMode?.THEME_NETURAL_900,
    },
    bugThemeBg: {
      backgroundColor: THEME_TYPE_BUG_400,
    },
    darkThemeBg: {
      backgroundColor: THEME_TYPE_DARK_400,
    },
    dragonThemeBg: {
      backgroundColor: THEME_TYPE_DRAGON_400,
    },
    electricThemeBg: {
      backgroundColor: THEME_TYPE_ELECTRIC_400,
    },
    fairyThemeBg: {
      backgroundColor: THEME_TYPE_FAIRY_400,
    },
    fightingThemeBg: {
      backgroundColor: THEME_TYPE_FIGHTING_400,
    },
    fireThemeBg: {
      backgroundColor: THEME_TYPE_FIRE_400,
    },
    flyingThemeBg: {
      backgroundColor: THEME_TYPE_FLYING_400,
    },
    ghostThemeBg: {
      backgroundColor: THEME_TYPE_GHOST_400,
    },
    grassThemeBg: {
      backgroundColor: THEME_TYPE_GRASS_400,
    },
    groundThemeBg: {
      backgroundColor: THEME_TYPE_GROUND_400,
    },
    iceThemeBg: {
      backgroundColor: THEME_TYPE_ICE_400,
    },
    normalThemeBg: {
      backgroundColor: THEME_TYPE_NORMAL_400,
    },
    poisonThemeBg: {
      backgroundColor: THEME_TYPE_POISON_400,
    },
    psychicThemeBg: {
      backgroundColor: THEME_TYPE_PSYCHIC_400,
    },
    rockThemeBg: {
      backgroundColor: THEME_TYPE_ROCK_400,
    },
    steelThemeBg: {
      backgroundColor: THEME_TYPE_STEEL_400,
    },
    waterThemeBg: {
      backgroundColor: THEME_TYPE_WATER_400,
    },
  });
