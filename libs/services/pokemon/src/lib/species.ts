import { AxiosResponse } from 'axios';
import { useSuspenseQueries } from '@tanstack/react-query';

import { PokemonSpecies } from '@pokemon-pet-shop/types';
import { axiosInstance } from '@pokemon-pet-shop/util-api-client';

export const useGetPokemonSpecies = (ids: string[]) => {
  const queryFn = (id: string) => axiosInstance.get<PokemonSpecies>(`pokemon/species/${id}`);

  return useSuspenseQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ['species', { id }],
        queryFn: () => queryFn(id),
        select: (r: AxiosResponse<PokemonSpecies>) => r?.data,
      };
    }),
  });
};
