import { CartDataContentApi, PokemonListApi, PokemonSpeciesApi } from '@pokemon-pet-shop/typing';
import { create } from 'zustand';

interface CartDataApi {
  modalData: PokemonListApi;
  speciesData: PokemonSpeciesApi;
}

const doesItemExistFn = (currentData: Array<CartDataContentApi>, outsideData: PokemonListApi) => {
  return currentData.find((el: CartDataContentApi) => {
    return String(outsideData?.id) === el?.id;
  });
};

const cartStore = (set: any, get: any) => ({
  cartContents: [],
  addQuantity: ({ modalData, speciesData }: CartDataApi): void => {
    const currentData = get().cartContents;
    const doesItemExist = doesItemExistFn(currentData, modalData);

    if (doesItemExist) {
      doesItemExist.quantity = currentData[0]?.quantity + 1;

      set({
        ...currentData,
        ...doesItemExist,
      });
      return;
    }

    set({
      cartContents: [
        {
          id: modalData?.id,
          name: modalData?.name,
          price: 500,
          quantity: 1,
          image: modalData?.sprites?.other?.['official-artwork']?.['front_default'],
          isLegendary: speciesData?.is_legendary,
          isMythical: speciesData?.is_mythical,
        },
      ],
    });
  },
  // removeQuantity: ({ id }: QuantityProps) => {
  //   const currentData = get().cartContents;
  //   set();
  // },
  // removeItem: ({ id }: RemoveItemProps) => {
  //   set();
  // },
});

export const useCartStore = create(cartStore);

// {
//   Id: Name: price: Quantity: Image: islegendary;
//   Ismythical;
// }
