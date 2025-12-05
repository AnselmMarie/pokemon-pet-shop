import { errFormat500ResponseUtil } from '../../../shared/middleware/error.middleware';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../../../shared/constants/httpCodes';
import { PokemonListQueryProps } from '../pokemon.types';

export const getPokemonListService = async ({
  limit = DEFAULT_LIMIT,
  offset = DEFAULT_OFFSET,
}: PokemonListQueryProps) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).catch(() => {
    throw errFormat500ResponseUtil();
  });

  if (res.ok) {
    return await res.json();
  }

  return res;
};

