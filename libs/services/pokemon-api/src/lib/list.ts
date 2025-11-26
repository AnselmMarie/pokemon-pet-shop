import { useInfiniteQuery, InfiniteData } from '@tanstack/react-query';

import { axiosInstance } from '@utils/apiClient';

export const useGetPokemonList = ({
  pageParam = 0,
}: {
  pageParam?: number;
}) => {
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
};
