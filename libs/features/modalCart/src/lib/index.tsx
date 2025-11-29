import { ReactElement } from 'react';

import { Box } from '@ui/box';
import { Typography } from '@ui/typography';
import { Modal, ModalScroll } from '@ui/modal';

import { useGetCart } from '@services/cart-api';

import { pricingFormatUSD } from '@utils/pricing';

import CartModalItem from './cart.modal.item';

export const CartModal = ({ isOpen, onCloseModal }: any): ReactElement => {
  const { data } = useGetCart();

  return (
    <Modal isOpen={isOpen} onClick={onCloseModal}>
      <ModalScroll>
        {(data?.data || [])?.map((el: Cart.Data[], i: number) => {
          return <CartModalItem key={i} el={el} />;
        })}
      </ModalScroll>

      <Box className="rounded-md flex flex-row justify-between items-center padding-md bg-lightGrey">
        <Typography className="text-bold text-lg">Total</Typography>
        <Typography className="text-bold text-lg">
          {pricingFormatUSD(data?.total)}
        </Typography>
      </Box>
    </Modal>
  );
};
