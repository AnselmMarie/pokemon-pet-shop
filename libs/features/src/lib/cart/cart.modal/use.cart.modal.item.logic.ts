import { useDeleteCartItem, useUpdateCart } from '@pokemon-pet-shop/services';
import { GenericNonReturnType } from '@pokemon-pet-shop/typing';

interface UseCartModalReturn {
  onHandleRemoveFromCart: GenericNonReturnType;
  onHandleAddToCart: GenericNonReturnType;
  onHandleRemoveCartItem: GenericNonReturnType;
}

const useCartModalItemLogic = (): UseCartModalReturn => {
  const updateCartMutation = useUpdateCart();
  const deleteCartMutation = useDeleteCartItem();

  const handleRemoveCartItem = (id: string) => {
    deleteCartMutation.mutate(id);
  };

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
    onHandleRemoveFromCart: handleRemoveFromCart,
    onHandleAddToCart: handleAddToCart,
    onHandleRemoveCartItem: handleRemoveCartItem,
  };
};

export default useCartModalItemLogic;
