import { create } from 'zustand';

interface QuantityProps {
  id: string;
}

interface RemoveItemProps {
  id: string;
}

const cartStore = (set: any, get: any) => ({
  cartContents: [],
  addQuantity: ({ id }: QuantityProps) => {
    set();
  },
  removeQuantity: ({ id }: QuantityProps) => {
    const currentData = get().cartContents;
    set();
  },
  removeItem: ({ id }: RemoveItemProps) => {
    set();
  },
});

export const useCartStore = create(cartStore);
