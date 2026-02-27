/* eslint-disable @typescript-eslint/no-unused-vars */
import { errFormat500ResponseUtil } from '../../../shared/middleware';
import {
  PokemonSpeciesApiResponse,
  PokemonSpeciesFlavorTextEntry,
  PokemonSpeciesGeneraEntry,
  PokemonSpeciesParamsProps,
} from '../pokemon.types';

export const getPokemonSpeciesService = async ({ id }: PokemonSpeciesParamsProps) => {
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
    }: PokemonSpeciesApiResponse = (await res.json()) as PokemonSpeciesApiResponse;
    return {
      ...args,
      flavor_text_entries: flavor_text_entries.find(
        (el: PokemonSpeciesFlavorTextEntry) => el?.language?.name === 'en'
      ),
      genera: genera.find((el: PokemonSpeciesGeneraEntry) => el?.language?.name === 'en'),
    };
  }
  throw res;
};
