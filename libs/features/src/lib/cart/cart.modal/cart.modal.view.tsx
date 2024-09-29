import { ReactElement } from 'react';

import { useRenderStyles } from '@pokemon-pet-shop/hooks';
import { CartDataContentApi } from '@pokemon-pet-shop/typing';
import { UiElementLayout, UiTypography } from '@pokemon-pet-shop/ui';
import { pricingFormatUSD } from '@pokemon-pet-shop/utils';

import CartModalScroll from './cart.modal.content.scroll';
import CartModalItem from './cart.modal.item.view';
import { styles } from './cart.modal.module';
import useCartModalLogic from './use.cart.modal.logic';

const CartModal = (): ReactElement => {
  const { data } = useCartModalLogic();
  const { newStyles } = useRenderStyles(styles);

  return (
    <UiElementLayout className={newStyles.modal}>
      <CartModalScroll>
        {(data?.data || [])?.map((el: CartDataContentApi, i: number) => {
          return <CartModalItem key={i} el={el} />;
        })}
      </CartModalScroll>
      <UiElementLayout className={newStyles.totalWrapper}>
        <UiTypography className={newStyles.totalContent}>Total</UiTypography>
        <UiTypography className={newStyles.totalPrice}>
          {pricingFormatUSD(data?.total)}
        </UiTypography>
      </UiElementLayout>
    </UiElementLayout>
  );
};

export default CartModal;
