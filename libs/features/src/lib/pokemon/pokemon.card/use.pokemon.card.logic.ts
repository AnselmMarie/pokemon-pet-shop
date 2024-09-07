import { useUpdateCart } from '@pokemon-pet-shop/services';
import { PokemonListApi } from '@pokemon-pet-shop/typing';

import { usePokemonTheme } from '../hooks/use.pokemone.theme.logic';

interface UseCardReturn {
  getThemeClass: any;
  onHandleUpdateCartSubmit: any;
}

const usePokemonCard = (data: PokemonListApi): UseCardReturn => {
  const { getThemeClass } = usePokemonTheme(data?.types);
  const updateCartMutation = useUpdateCart();

  const handleUpdateCartSubmit = () => {
    updateCartMutation.mutate({
      id: data?.id,
      quantity: 1,
    });
  };

  return {
    getThemeClass,
    onHandleUpdateCartSubmit: handleUpdateCartSubmit,
  };
};

export default usePokemonCard;
