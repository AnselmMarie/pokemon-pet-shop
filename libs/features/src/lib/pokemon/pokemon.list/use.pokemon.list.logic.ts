import { useGetPokemonList } from '@pokemon-pet-shop/services';

interface PokemonListReturn {
  data: any;
  isError: boolean;
  isLoading: boolean;
  isFetching: boolean;
}

const usePokemonList = (): PokemonListReturn => {
  const { data, isError, isLoading, isFetching } = useGetPokemonList();

  return {
    data,
    isError,
    isLoading,
    isFetching,
  };
};

export default usePokemonList;
