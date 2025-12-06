import { useInfiniteQuery, InfiniteData } from '@tanstack/react-query';

import { axiosInstance } from '@utils/api-client';

export const useGetPokemonList = () => {
  const queryKey = ['pokemon-list'];
  const queryFn = ({ pageParam }: { pageParam: number }) =>
    axiosInstance.get<InfiniteData<Pokemon.Base, unknown> | undefined>(
      `pokemon/list?limit=50&offset=${pageParam}`
    );

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
};
