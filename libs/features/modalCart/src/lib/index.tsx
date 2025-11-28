import { ReactElement } from 'react';

import { Box } from '@ui/box';
import { Typography } from '@ui/typography';
import { Modal } from '@ui/modal';
import { ScrollWrapper } from '@ui/scrollWrapper';

import { useGetCart } from '@services/cart-api';

import { pricingFormatUSD } from '@utils/pricing';

import CartModalItem from './cart.modal.item';

export const CartModal = ({ isOpen, onCloseModal }: any): ReactElement => {
  const { data } = useGetCart();

  return (
    <Modal isOpen={isOpen} onClick={onCloseModal}>
      <ScrollWrapper>
        {(data?.data || [])?.map((el: Cart.Data[], i: number) => {
          return <CartModalItem key={i} el={el} />;
        })}
      </ScrollWrapper>

      <Box className="rounded-md flex flex-row justify-between items-center padding-md bg-lightGrey">
        <Typography className="text-bold text-lg">Total</Typography>
        <Typography className="text-bold text-lg">
          {pricingFormatUSD(data?.total)}
        </Typography>
      </Box>
    </Modal>
  );
};
