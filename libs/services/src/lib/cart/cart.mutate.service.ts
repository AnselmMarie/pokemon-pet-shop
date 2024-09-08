import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteCartItem, updateCart } from './api.cart.service';

export function useUpdateCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: any) => updateCart(data),
    onSettled: async (_, error) => {
      if (!error) {
        await queryClient.invalidateQueries({ queryKey: ['cart'] });
      }
    },
  });
}

export function useDeleteCartItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteCartItem(id),
    onSettled: async (_, error) => {
      if (!error) {
        await queryClient.invalidateQueries({ queryKey: ['cart'] });
      }
    },
  });
}
