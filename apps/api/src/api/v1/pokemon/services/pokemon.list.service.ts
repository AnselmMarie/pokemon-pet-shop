import { errFormat500ResponseUtil } from '../../../../utils/err.format.response.util';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../const/default.prop.const';
import { PokemonListQueryProps } from '../interface/pokemon.interface';

const getPokemonListService = async ({
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

export { getPokemonListService };
