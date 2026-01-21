import { ReactElement } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';

import { CartData } from '@pokemon-pet-shop/types';
import { Box, Typography } from '@pokemon-pet-shop/ui-primitives';
import { Modal, ModalScroll } from '@pokemon-pet-shop/ui-components';

import { useGetCart } from '@pokemon-pet-shop/service-cart';

import { pricingFormatUSD } from '@pokemon-pet-shop/util-pricing';

import CartModalItem from './cart-modal-item';
import { closeSideCartModalAtom, isSideCartModalOpenAtom } from './cart-modal-atom.state';

export const CartModal = (): ReactElement => {
  const { data } = useGetCart();

  const isOpen = useAtomValue(isSideCartModalOpenAtom);
  const closeModal = useSetAtom(closeSideCartModalAtom);

  return (
    <Modal
      title="Pokecart"
      headlineType="relative"
      modalAlignment="right"
      isOpen={isOpen}
      onClick={closeModal}
    >
      <ModalScroll>
        <Box className="pb-[150px]">
          {(data?.data ?? []).map((el: CartData, i: number) => {
            return (
              <CartModalItem
                key={i}
                el={el}
                currIndex={i}
                lastIndex={data?.data ? data?.data.length - 1 : 0}
              />
            );
          })}
        </Box>
      </ModalScroll>

      <Box className="rounded-b-sm w-full absolute bottom-[0px] flex flex-row justify-between items-center p-md bg-lightGrey">
        <Typography className="font-bold text-lg">Total</Typography>
        <Typography className="font-bold text-lg">
          {pricingFormatUSD(Number(data?.total))}
        </Typography>
      </Box>
    </Modal>
  );
};
