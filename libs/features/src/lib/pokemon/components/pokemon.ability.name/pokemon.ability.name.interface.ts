import { PokemonDetailAbilityObj } from '@pokemon-pet-shop/typing';

export interface PokemonAbilityNameProps {
  abilityData: PokemonDetailAbilityObj;
  typeData: any;
  getThemeClass: string;
  showAtkLine?: boolean;
  displayInDetail?: boolean;
  isLoading?: boolean;
}
