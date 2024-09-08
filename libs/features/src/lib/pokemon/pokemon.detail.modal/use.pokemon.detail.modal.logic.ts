import { useGetPokemonSpecies, useUpdateCart } from '@pokemon-pet-shop/services';
import { GenericNonReturnType, PokemonListApi, PokemonSpeciesApi } from '@pokemon-pet-shop/typing';

interface PokemonDetailModalReturn {
  speciesData: PokemonSpeciesApi;
  isError: boolean;
  isLoading: boolean;
  isFetching: boolean;
  onHandleUpdateCartSubmit: GenericNonReturnType;
}

const usePokemonDetailModalLogic = (modalData: PokemonListApi): PokemonDetailModalReturn => {
  const res = useGetPokemonSpecies([String(modalData?.id)]);
  const { data, isError, isLoading, isFetching } = res[0];
  const updateCartMutation = useUpdateCart();

  const handleUpdateCartSubmit = () => {
    updateCartMutation.mutate({
      id: modalData?.id,
      addToCart: true,
    });
  };

  return {
    speciesData: data,
    isError,
    isLoading,
    isFetching,
    onHandleUpdateCartSubmit: handleUpdateCartSubmit,
  };
};

export default usePokemonDetailModalLogic;
