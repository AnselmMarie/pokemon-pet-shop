import {
  THEME_FONT_16,
  THEME_FONT_18,
  THEME_FONT_24,
  THEME_FONT_32,
  THEME_RADIUS_8,
  THEME_SPACING_10,
  THEME_SPACING_15,
  THEME_SPACING_20,
  THEME_SPACING_25,
  THEME_SPACING_30,
  THEME_SPACING_35,
  THEME_TYPE_BUG_600,
  THEME_TYPE_DARK_600,
  THEME_TYPE_DRAGON_600,
  THEME_TYPE_ELECTRIC_600,
  THEME_TYPE_FAIRY_600,
  THEME_TYPE_FIGHTING_600,
  THEME_TYPE_FIRE_600,
  THEME_TYPE_FLYING_600,
  THEME_TYPE_GHOST_600,
  THEME_TYPE_GRASS_600,
  THEME_TYPE_GROUND_600,
  THEME_TYPE_ICE_600,
  THEME_TYPE_NORMAL_600,
  THEME_TYPE_POISON_600,
  THEME_TYPE_PSYCHIC_600,
  THEME_TYPE_ROCK_600,
  THEME_TYPE_STEEL_600,
  THEME_TYPE_WATER_600,
  THEME_YELLOW_600,
} from '@pokemon-pet-shop/ui/styles/var';
import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    modal: {
      position: 'relative',
    },
    priceWrapper: {
      position: 'absolute',
      display: 'flex',
      top: 0,
      marginTop: THEME_SPACING_10,
      marginLeft: THEME_SPACING_10,
      backgroundColor: THEME_YELLOW_600,
      paddingTop: THEME_SPACING_10,
      paddingBottom: THEME_SPACING_10,
      paddingLeft: THEME_SPACING_15,
      paddingRight: THEME_SPACING_15,
      borderRadius: THEME_RADIUS_8,
    },
    priceText: {
      fontSize: THEME_FONT_24,
    },
    imageContainer: {
      height: 450,
      zIndex: 0,
      borderTopLeftRadius: THEME_RADIUS_8,
      borderTopRightRadius: THEME_RADIUS_8,
      justifyContent: 'center',
    },
    image: {
      height: 400,
    },
    dropdownHeadline: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'absolute',
      paddingTop: THEME_SPACING_15,
      paddingBottom: THEME_SPACING_15,
      paddingLeft: THEME_SPACING_15,
      paddingRight: THEME_SPACING_15,
    },
    contentCardWrapper: {
      marginTop: -45,
      marginLeft: THEME_SPACING_30,
      marginRight: THEME_SPACING_30,
    },
    cardSubHeadline: {
      fontSize: THEME_FONT_16,
      textAlign: 'center',
      marginBottom: THEME_SPACING_10,
    },
    cardHeadline: {
      fontSize: THEME_FONT_32,
      textAlign: 'center',
      marginBottom: THEME_SPACING_20,
    },
    cardDescription: {
      fontSize: THEME_FONT_16,
      marginBottom: THEME_SPACING_25,
    },
    weightHeightWrapper: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: THEME_SPACING_25,
    },
    weight: {
      fontSize: THEME_FONT_18,
      marginBottom: THEME_SPACING_10,
    },
    height: {
      fontSize: THEME_FONT_18,
    },
    tagWrapper: {
      marginBottom: THEME_SPACING_30,
    },
    btnWrapper: {
      marginTop: THEME_SPACING_35,
      textAlign: 'center',
    },
    bugThemeImageBg: {
      backgroundColor: THEME_TYPE_BUG_600,
    },
    darkThemeImageBg: {
      backgroundColor: THEME_TYPE_DARK_600,
    },
    dragonThemeImageBg: {
      backgroundColor: THEME_TYPE_DRAGON_600,
    },
    electricThemeImageBg: {
      backgroundColor: THEME_TYPE_ELECTRIC_600,
    },
    fairyThemeImageBg: {
      backgroundColor: THEME_TYPE_FAIRY_600,
    },
    fightingThemeImageBg: {
      backgroundColor: THEME_TYPE_FIGHTING_600,
    },
    fireThemeImageBg: {
      backgroundColor: THEME_TYPE_FIRE_600,
    },
    flyingThemeImageBg: {
      backgroundColor: THEME_TYPE_FLYING_600,
    },
    ghostThemeImageBg: {
      backgroundColor: THEME_TYPE_GHOST_600,
    },
    grassThemeImageBg: {
      backgroundColor: THEME_TYPE_GRASS_600,
    },
    groundThemeImageBg: {
      backgroundColor: THEME_TYPE_GROUND_600,
    },
    iceThemeImageBg: {
      backgroundColor: THEME_TYPE_ICE_600,
    },
    normalThemeImageBg: {
      backgroundColor: THEME_TYPE_NORMAL_600,
    },
    poisonThemeImageBg: {
      backgroundColor: THEME_TYPE_POISON_600,
    },
    psychicThemeImageBg: {
      backgroundColor: THEME_TYPE_PSYCHIC_600,
    },
    rockThemeImageBg: {
      backgroundColor: THEME_TYPE_ROCK_600,
    },
    steelThemeImageBg: {
      backgroundColor: THEME_TYPE_STEEL_600,
    },
    waterThemeImageBg: {
      backgroundColor: THEME_TYPE_WATER_600,
    },
  });
