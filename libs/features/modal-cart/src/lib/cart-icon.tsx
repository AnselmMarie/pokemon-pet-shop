import { ReactElement } from 'react';
import { useSetAtom } from 'jotai';

import { Box } from '@ui/box';
import { Typography } from '@ui/typography';
import { Icon } from '@ui/icon';

import { useGetCart } from '@services/cart-api';

import { openSideCartModalAtom } from '@states/atom-side-cart';
import { CartModal } from './cart-modal';

export const CartIcon = (): ReactElement => {
  const openCartModal = useSetAtom(openSideCartModalAtom);

  const { data } = useGetCart();

  return (
    <>
      <CartModal />
      <Box className="flex justify-center items-center relative">
        <Box
          className="absolute w-[51px] h-[47px] z-10 -top-[14px]"
          onClick={() => openCartModal}
        />
        <Icon classNameIcon="ml-2 red" size={28} />
        {data?.counter ? (
          <Box className="rounded-circle bg-medYellow min-w-[23px] min-h-[23px] align-center inline-block p-3 absolute -top-[15px] -right-[11px] pointer">
            <Typography className="flex justify-center item-center text-primary font-bold">
              {data?.counter}
            </Typography>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
