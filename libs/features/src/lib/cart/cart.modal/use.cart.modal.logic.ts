import { useGetCart, useUpdateCart } from '@pokemon-pet-shop/services';
import { CartDataApi, GenericNonReturnType } from '@pokemon-pet-shop/typing';

interface UseCartModalReturn {
  data: CartDataApi;
  onHandleRemoveFromCart: GenericNonReturnType;
  onHandleAddToCart: GenericNonReturnType;
}

const useCartModalLogic = (): UseCartModalReturn => {
  const { data } = useGetCart();
  const updateCartMutation = useUpdateCart();

  const handleAddToCart = (id: string) => {
    updateCartMutation.mutate({
      id,
      addToCart: true,
      removeFromCart: false,
    });
  };

  const handleRemoveFromCart = (id: string) => {
    updateCartMutation.mutate({
      id,
      addToCart: false,
      removeFromCart: true,
    });
  };

  return {
    data,
    onHandleRemoveFromCart: handleRemoveFromCart,
    onHandleAddToCart: handleAddToCart,
  };
};

export default useCartModalLogic;
