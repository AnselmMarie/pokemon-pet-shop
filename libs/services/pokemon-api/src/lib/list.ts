import { AxiosResponse } from 'axios';
import { useInfiniteQuery, InfiniteData } from '@tanstack/react-query';

import { PokemonDetailBase } from '@pokemon-pet-shop/types';
import { axiosInstance } from '@utils/api-client';

export const useGetPokemonList = () => {
  const queryKey = ['pokemon-list'];
  const queryFn = ({ pageParam }: { pageParam: number }) =>
    axiosInstance.get<(PokemonDetailBase & { name: string })[]>(
      `pokemon/list?limit=50&offset=${pageParam}`
    );

  return useInfiniteQuery({
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
