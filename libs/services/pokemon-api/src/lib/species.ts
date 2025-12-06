import { useQueries } from '@tanstack/react-query';

import { axiosInstance } from '@utils/api-client';

export const useGetPokemonSpecies = (
  ids: (string | undefined)[] | undefined
) => {
  const queryFn = (id: string | undefined) =>
    axiosInstance.get<PokemonSpecies.Species>(`pokemon/species/${id}`);

  return useQueries({
    queries: (ids ?? []).map((id) => {
      return {
        queryKey: ['species', { id }],
        queryFn: () => queryFn(id),
        select: (r: any) => r?.data,
      };
    }),
  });
};
