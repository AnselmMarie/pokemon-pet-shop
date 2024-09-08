import { useUpdateCart } from '@pokemon-pet-shop/services';
import { GenericNonReturnType, PokemonListApi } from '@pokemon-pet-shop/typing';

import { usePokemonTheme } from '../hooks/use.pokemone.theme.logic';

interface UseCardReturn {
  getThemeClass: any;
  onHandleUpdateCartSubmit: GenericNonReturnType;
}

const usePokemonCard = (data: PokemonListApi): UseCardReturn => {
  const { getThemeClass } = usePokemonTheme(data?.types);
  const updateCartMutation = useUpdateCart();

  const handleUpdateCartSubmit = () => {
    updateCartMutation.mutate({
      id: data?.id,
      addToCart: true,
    });
  };

  return {
    getThemeClass,
    onHandleUpdateCartSubmit: handleUpdateCartSubmit,
  };
};

export default usePokemonCard;
