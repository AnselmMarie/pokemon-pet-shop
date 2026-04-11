import { ReactElement } from 'react';
import { useSetAtom } from 'jotai';

import { Box, Typography } from '@pokemon-pet-shop/ui-primitives';
import { Icon, SuspenseBoundary } from '@pokemon-pet-shop/ui-components';

import { useGetCart } from '@pokemon-pet-shop/service-cart';

import { CartModal } from './cart-modal';
import { openSideCartModalAtom } from './cart-modal-atom.state';

const CartIconContent = (): ReactElement | null => {
  const { data } = useGetCart();

  return data?.counter ? (
    <Box className="rounded-circle bg-medYellow min-w-[23px] min-h-[23px] align-center inline-block p-3 absolute -top-[15px] -right-[11px] pointer">
      <Typography className="flex justify-center item-center text-primary font-bold">
        {data?.counter}
      </Typography>
    </Box>
  ) : null;
};

export const CartIcon = (): ReactElement => {
  const openCartModal = useSetAtom(openSideCartModalAtom);

  return (
    <>
      <CartModal />
      <Box className="flex justify-center items-center relative">
        <Box
          className="absolute w-[51px] h-[47px] z-10 -top-[14px] cursor-pointer"
          onClick={() => {
            openCartModal();
          }}
        />
        <Icon classNameIcon="ml-2 red" size={28} color="blue" />
        <SuspenseBoundary>
          <CartIconContent />
        </SuspenseBoundary>
      </Box>
    </>
  );
};
