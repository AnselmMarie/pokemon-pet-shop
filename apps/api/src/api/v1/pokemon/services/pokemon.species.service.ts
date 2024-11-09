/* eslint-disable @typescript-eslint/no-unused-vars */
import { errFormat500ResponseUtil } from '../../../../utils/err.format.response.util';
import { PokemonSpeciesParamsProps } from '../interface/pokemon.interface';

const getPokemonSpeciesService = async ({ id }: PokemonSpeciesParamsProps) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).catch(() => {
    throw errFormat500ResponseUtil();
  });

  if (res.ok) {
    const {
      genera,
      pokedex_numbers,
      form_descriptions,
      pal_park_encounters,
      flavor_text_entries,
      names,
      ...args
    } = await res.json();
    return {
      ...args,
      flavor_text_entries: flavor_text_entries.find((el) => el?.language?.name === 'en'),
      genera: genera.find((el) => el?.language?.name === 'en'),
    };
  }
  throw res;
};

export { getPokemonSpeciesService };
