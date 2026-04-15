import { AxiosResponse } from 'axios';
import { useSuspenseInfiniteQuery, InfiniteData } from '@tanstack/react-query';

import { PokemonDetailBase } from '@pokemon-pet-shop/types';
import { axiosInstance } from '@pokemon-pet-shop/util-api-client';

export const useGetPokemonList = () => {
  const queryKey = ['pokemon-list'];
  const queryFn = ({ pageParam }: { pageParam: number }) =>
    axiosInstance.get<(PokemonDetailBase & { name: string })[]>(
      `pokemon/list?limit=50&offset=${pageParam}`
    );

  return useSuspenseInfiniteQuery({
    queryKey,
    queryFn,
    select: (r: InfiniteData<AxiosResponse<(PokemonDetailBase & { name: string })[]>, number>) => r,
    initialPageParam: 0,
    getNextPageParam: (
      lastPage: AxiosResponse<(PokemonDetailBase & { name: string })[]>,
      _,
      lastPageParam
    ) => {
      if (lastPage?.data?.length === 0) {
        return undefined;
      }
      return lastPageParam + 50;
    },
  });
};
