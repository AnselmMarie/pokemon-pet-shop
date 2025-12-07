import { ReactElement } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';

import { Box } from '@ui/box';
import { Typography } from '@ui/typography';
import { Modal, ModalScroll } from '@ui/modal';

import { useGetCart } from '@services/cart-api';

import {
  isSideCartModalOpenAtom,
  closeSideCartModalAtom,
} from '@states/atom-side-cart';

import { pricingFormatUSD } from '@utils/pricing';

import CartModalItem from './cart-modal-item';

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
          {(data?.data ?? []).map((el: Cart.Data[], i: number) => {
            return (
              <CartModalItem
                key={i}
                el={el}
                currIndex={i}
                lastIndex={data?.data.length - 1}
              />
            );
          })}
        </Box>
      </ModalScroll>

      <Box className="rounded-b-sm w-full absolute bottom-[0px] flex flex-row justify-between items-center p-md bg-lightGrey">
        <Typography className="font-bold text-lg">Total</Typography>
        <Typography className="font-bold text-lg">
          {pricingFormatUSD(data?.total)}
        </Typography>
      </Box>
    </Modal>
  );
};
