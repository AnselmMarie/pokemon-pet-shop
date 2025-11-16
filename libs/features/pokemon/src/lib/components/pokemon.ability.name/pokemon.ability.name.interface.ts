// import { PokemonDetailAbilityObj } from '@pokemon-pet-shop/typing';

export interface PokemonAbilityNameProps {
  abilityData: any; // PokemonDetailAbilityObj;
  typeData: any;
  getPokeTypeClass: string;
  showAtkLine?: boolean;
  displayInDetail?: boolean;
  isLoading?: boolean;
}
