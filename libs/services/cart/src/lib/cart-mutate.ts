import { useMutation, useQueryClient } from '@tanstack/react-query';

import { CartPayload } from '@pokemon-pet-shop/types';
import { axiosInstance } from '@pokemon-pet-shop/util-api-client';

export const useUpdateCart = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data: CartPayload) =>
    axiosInstance.put<CartPayload>(`cart/item/${data?.id}`, data);

  return useMutation({
    mutationFn,
    onSettled: async (_, error) => {
      if (!error) {
        await queryClient.invalidateQueries({ queryKey: ['cart'] });
      }
    },
  });
};

export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();
  const mutationFn = (id: string) => axiosInstance.delete<void>(`cart/item/${id}`);

  return useMutation({
    mutationFn,
    onSettled: async (_, error) => {
      if (!error) {
        await queryClient.invalidateQueries({ queryKey: ['cart'] });
      }
    },
  });
};
