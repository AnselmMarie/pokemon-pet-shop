import { useGetPokemonSpecies } from '@pokemon-pet-shop/services';

interface PokemonDetailModalReturn {
  detailData: any;
  isError: boolean;
  isLoading: boolean;
  isFetching: boolean;
}

const usePokemonDetailModalLogic = (id: string): PokemonDetailModalReturn => {
  const res = useGetPokemonSpecies([id]);
  const { data, isError, isLoading, isFetching } = res[0];

  return {
    detailData: data,
    isError,
    isLoading,
    isFetching,
  };
};

export default usePokemonDetailModalLogic;
