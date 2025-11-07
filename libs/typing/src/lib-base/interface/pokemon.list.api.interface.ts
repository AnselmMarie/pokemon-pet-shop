import { PokemonDetailApi } from './pokemon.detail.api.interface';
import { PokemonsApi } from './pokemons.api.interface';

export type PokemonListApi = PokemonsApi & PokemonDetailApi;
