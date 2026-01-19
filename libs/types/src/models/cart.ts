import { PokemonDetailBase } from './pokemon-detail';

export interface CartPayload {
  id: string;
  addToCart?: boolean;
  removeFromCart?: boolean;
}

export interface CartData {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  types: PokemonDetailBase;
  isLegendary: boolean;
  isMythical: boolean;
}

export interface Cart {
  data: CartData[];
  counter: number;
  total: number;
}
