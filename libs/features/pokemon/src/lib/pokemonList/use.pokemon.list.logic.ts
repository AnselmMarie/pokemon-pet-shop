// import { InfiniteData } from '@tanstack/react-query';

import { useGetPokemonList } from '@services/pokemon-api';

// import { PokemonListApi } from '@pokemon-pet-shop/typing';

// interface PokemonListReturn {
//   data: any; //InfiniteData<PokemonListApi, unknown> | undefined;
//   isError: boolean;
//   isLoading: boolean;
//   isFetchingNextPage: boolean;
//   isPlaceholderData?: boolean;
//   hasNextPage?: boolean;
//   onFetchNextPage: any;
// }

export const usePokemonList = (): any => {
  const {
    data,
    isError,
    isLoading,
    isFetching,
    isPlaceholderData,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGetPokemonList({ pageParam: 0 });

  return {
    data: data?.pages,
    isError,
    isLoading: isLoading || isFetching || isFetchingNextPage,
    isFetchingNextPage,
    isPlaceholderData,
    hasNextPage,
    onFetchNextPage: fetchNextPage,
  };
};
