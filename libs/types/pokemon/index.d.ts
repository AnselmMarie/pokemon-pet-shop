// import { PokemonDetailApi } from './pokemon.detail.api.interface';
// import { PokemonsApi } from './pokemons';

// import { PokemonDetailApi } from "./pokemon.detail";

// export type PokemonListApi = PokemonsApi & PokemonDetailApi;

declare global {
  namespace Pokemon {
    interface Base {
      count: number;
      next: string | null;
      previous: string | null;
      results: Creature[];
    }

    interface Creature {
      name: string;
      url: string;
    }
  }
}

export {};
