import { errFormat500ResponseUtil } from '../../../../utils/err.format.response.util';
import { PokemonEvolutionChainParamsProps } from '../interface/pokemon.interface';

const getPokemonEvolutionChainService = async ({ id }: PokemonEvolutionChainParamsProps) => {
  const res = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`).catch(() => {
    throw errFormat500ResponseUtil();
  });

  if (res.ok) {
    return await res.json();
  }
  throw res;
};

export { getPokemonEvolutionChainService };
