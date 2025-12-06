import { errFormat500ResponseUtil } from '../../../shared/middleware';
import { PokemonEvolutionChainParamsProps } from '../pokemon.types';

export const getPokemonEvolutionChainService = async ({
  id,
}: PokemonEvolutionChainParamsProps): Promise<PokemonEvolution.Base> => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/evolution-chain/${id}`
  ).catch(() => {
    throw errFormat500ResponseUtil();
  });

  if (res.ok) {
    return (await res.json()) as Promise<PokemonEvolution.Base>;
  }
  throw res;
};
