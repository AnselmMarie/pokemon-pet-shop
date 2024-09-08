import { PokemonListApi, PokemonSpeciesApi } from '@pokemon-pet-shop/typing';
import { InfiniteData } from '@tanstack/react-query';

import { axiosInstance } from '../common/utils/api.util';

export const getPokemonList = async ({ pageParam }: { pageParam: number }) => {
  return (
    await axiosInstance.get<InfiniteData<PokemonListApi, unknown> | undefined>(
      `pokemon/list?limit=50&offset=${pageParam}`
    )
  ).data;
};

export const getPokemonSpecies = async (id: number) => {
  return (await axiosInstance.get<PokemonSpeciesApi>(`pokemon/species/${id}`)).data;
};
