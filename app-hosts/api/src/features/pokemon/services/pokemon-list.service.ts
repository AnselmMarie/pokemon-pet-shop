import { Pokemon } from '@pokemon-pet-shop/types';

import { errFormat500ResponseUtil } from '../../../shared/middleware';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../constants';
import { PokemonListQueryProps } from '../pokemon.types';

export const getPokemonListService = async ({
  limit = DEFAULT_LIMIT,
  offset = DEFAULT_OFFSET,
}: PokemonListQueryProps): Promise<Pokemon> => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).catch(() => {
    throw errFormat500ResponseUtil();
  });

  if (res.ok) {
    return (await res.json()) as Pokemon;
  }

  throw res;
};
