import { AxiosResponse } from 'axios';
import { useInfiniteQuery, InfiniteData } from '@tanstack/react-query';

import { axiosInstance } from '@utils/api-client';

export const useGetPokemonList = () => {
  const queryKey = ['pokemon-list'];
  const queryFn = ({ pageParam }: { pageParam: number }) =>
    axiosInstance.get<(PokemonDetail.Base & { name: string })[]>(
      `pokemon/list?limit=50&offset=${pageParam}`
    );

  return useInfiniteQuery({
    queryKey,
    queryFn,
    select: (r: InfiniteData<AxiosResponse<(PokemonDetail.Base & { name: string })[]>, number>) =>
      r,
    initialPageParam: 0,
    getNextPageParam: (
      lastPage: AxiosResponse<(PokemonDetail.Base & { name: string })[]>,
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
