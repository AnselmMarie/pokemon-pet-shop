import { useGetPokemonSpecies, useUpdateCart } from '@pokemon-pet-shop/services';
import { PokemonListApi, PokemonSpeciesApi } from '@pokemon-pet-shop/typing';

interface PokemonDetailModalReturn {
  speciesData: PokemonSpeciesApi;
  isError: boolean;
  isLoading: boolean;
  isFetching: boolean;
  onHandleUpdateCartSubmit: any;
}

const usePokemonDetailModalLogic = (modalData: PokemonListApi): PokemonDetailModalReturn => {
  const res = useGetPokemonSpecies([String(modalData?.id)]);
  const updateCartMutation = useUpdateCart();
  const { data, isError, isLoading, isFetching } = res[0];

  const handleUpdateCartSubmit = () => {
    updateCartMutation.mutate({
      id: modalData?.id,
      quantity: 1,
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
