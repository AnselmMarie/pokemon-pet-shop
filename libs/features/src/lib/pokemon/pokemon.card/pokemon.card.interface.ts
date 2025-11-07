import { PokemonListApi } from '@pokemon-pet-shop/typing';

export interface CardProps {
  data: PokemonListApi;
  isLoading: boolean;
}
