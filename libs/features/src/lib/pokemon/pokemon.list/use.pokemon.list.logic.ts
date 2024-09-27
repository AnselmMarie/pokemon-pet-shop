import { useGetPokemonList } from '@pokemon-pet-shop/services';
import { PokemonListApi } from '@pokemon-pet-shop/typing';
import { InfiniteData } from '@tanstack/react-query';

interface PokemonListReturn {
  data: InfiniteData<PokemonListApi, unknown> | undefined;
  isError: boolean;
  isLoading: boolean;
  isFetchingNextPage: boolean;
  isPlaceholderData?: boolean;
  hasNextPage?: boolean;
  onFetchNextPage: any;
}

const usePokemonList = (): PokemonListReturn => {
  const {
    data,
    isError,
    isLoading,
    isFetching,
    isPlaceholderData,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGetPokemonList();

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

export default usePokemonList;
