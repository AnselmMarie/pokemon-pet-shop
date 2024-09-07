import { useMutation } from '@tanstack/react-query';

import { clearCart, deleteCartItem, updateCart } from './api.cart.service';

export function useUpdateCart() {
  return useMutation({
    mutationFn: (data: any) => updateCart(data),
  });
}

export function useDeleteCartItem() {
  return useMutation({
    mutationFn: (id: number) => deleteCartItem(id),
  });
}

export function useClearCart() {
  return useMutation({
    mutationFn: () => clearCart(),
  });
}
