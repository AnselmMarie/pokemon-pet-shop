import {
  useQueries,
  useInfiniteQuery,
  InfiniteData,
} from '@tanstack/react-query';

import { axiosInstance } from '@utils/apiClient';

export function useGetPokemonList({ pageParam = 0 }: { pageParam?: number }) {
  // return useInfiniteQuery({
  //   queryKey: ['pokemonList'],
  //   queryFn: getPokemonList,
  //   initialPageParam: 0,
  //   getNextPageParam: (lastPage, _, lastPageParam) => {
  //     if (lastPage?.length === 0) {
  //       return undefined;
  //     }
  //     return lastPageParam + 50;
  //   },
  // });
  const url = `pokemon/list?limit=50&offset=${pageParam}`;
  const queryKey = ['pokemon-list'];
  const queryFn = () =>
    axiosInstance.get<InfiniteData<Pokemon.Base, unknown> | undefined>(url);

  return useInfiniteQuery({
    queryKey,
    queryFn,
    select: (r: any) => r,
    initialPageParam: 0,
    getNextPageParam: (lastPage: any, _, lastPageParam) => {
      if (lastPage?.length === 0) {
        return undefined;
      }
      return lastPageParam + 50;
    },
  });
}

export function useGetPokemonSpecies(ids: (string | undefined)[] | undefined) {
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

  // return useQueries({
  //   queries: (ids ?? []).map((id) => {
  //     return {
  //       queryKey: ['species', { id }],
  //       queryFn: () => getPokemonSpecies(id),
  //     };
  //   }),
  // });
}
