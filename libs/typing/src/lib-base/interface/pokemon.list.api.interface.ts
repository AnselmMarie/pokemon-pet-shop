import { PokemonAbilityApi } from './pokemon.ability.api.interface';
import { PokemonsApi } from './pokemons.api.interface';

export type PokemonListApi = PokemonsApi & PokemonAbilityApi;
