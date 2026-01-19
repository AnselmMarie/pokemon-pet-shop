import { AxiosResponse } from 'axios';
import { useQueries } from '@tanstack/react-query';

import { PokemonSpecies } from '@pokemon-pet-shop/types';
import { axiosInstance } from '@utils/api-client';

export const useGetPokemonSpecies = (ids: (string | undefined)[] | undefined) => {
  const queryFn = (id: string | undefined) =>
    axiosInstance.get<PokemonSpecies>(`pokemon/species/${id}`);

  return useQueries({
    queries: (ids ?? []).map((id) => {
      return {
        queryKey: ['species', { id }],
        queryFn: () => queryFn(id),
        select: (r: AxiosResponse<PokemonSpecies>) => r?.data,
      };
    }),
  });
};
