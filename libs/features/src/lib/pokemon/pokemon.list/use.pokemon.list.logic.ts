import { useGetPokemonList } from '@pokemon-pet-shop/services';
import { PokemonListApi } from '@pokemon-pet-shop/typing';
import { InfiniteData } from '@tanstack/react-query';

interface PokemonListReturn {
  data: InfiniteData<PokemonListApi, unknown> | undefined;
  isError: boolean;
  isLoading: boolean;
  isFetching: boolean;
}

const usePokemonList = (): PokemonListReturn => {
  const { data, isError, isLoading, isFetching } = useGetPokemonList();

  return {
    data: data?.pages[0],
    isError,
    isLoading,
    isFetching,
  };
};

export default usePokemonList;
