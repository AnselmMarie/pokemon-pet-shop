import { useQueries, useInfiniteQuery } from '@tanstack/react-query';

import { getPokemonList, getPokemonSpecies } from './api.pokemon.service';

export function useGetPokemonList() {
  return useInfiniteQuery({
    queryKey: ['pokemonList'],
    queryFn: getPokemonList,
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage?.length === 0) {
        return undefined;
      }
      return lastPageParam + 50;
    },
  });
}

export function useGetPokemonSpecies(ids: (string | undefined)[] | undefined) {
  return useQueries({
    queries: (ids ?? []).map((id) => {
      return {
        queryKey: ['species', { id }],
        queryFn: () => getPokemonSpecies(id),
      };
    }),
  });
}
