import { ReactElement } from 'react';

import { CartDataContentApi } from '@pokemon-pet-shop/typing';
import {
  UiElementLayout,
  UiIcon,
  IconTypeEnum,
  UiTypography,
  UiImage,
  mobSrcTypeEnum,
  TypographyTypeEnum,
} from '@pokemon-pet-shop/ui';

import styles from './cart.modal.module.css';
import useCartModalLogic from './use.cart.modal.logic';

const CartModal = (): ReactElement => {
  const { data, onHandleRemoveFromCart, onHandleAddToCart, onHandleRemoveCartItem } =
    useCartModalLogic();

  return (
    <UiElementLayout className={styles.modal}>
      <UiElementLayout className={styles.cartContent}>
        {(data?.data || [])?.map((el: CartDataContentApi, i: number) => {
          return (
            <UiElementLayout key={i} className={styles?.cartWrapper}>
              <UiElementLayout className={styles.cardContentRow}>
                <UiImage
                  src={el?.image}
                  className={styles.image}
                  alt={`${el?.name} Image`}
                  mobSrcType={mobSrcTypeEnum.URI}
                />
                <UiElementLayout className={styles?.middleRow}>
                  <UiTypography
                    className={styles.cardHeadline}
                    typographyType={TypographyTypeEnum.H1}
                  >
                    {el?.name}
                  </UiTypography>
                  <UiTypography typographyType={TypographyTypeEnum.SPAN} className={styles.price}>
                    {el?.price}
                  </UiTypography>
                  <UiElementLayout>
                    <UiIcon
                      icon={IconTypeEnum.ICON_MINUS}
                      onClick={() => onHandleRemoveFromCart(el?.id)}
                    />
                    <UiTypography>{el?.quantity}</UiTypography>
                    <UiIcon
                      icon={IconTypeEnum.ICON_PLUS}
                      onClick={() => onHandleAddToCart(el?.id)}
                    />
                  </UiElementLayout>
                </UiElementLayout>

                <UiIcon
                  icon={IconTypeEnum.ICON_TRASH}
                  onClick={() => onHandleRemoveCartItem(el?.id)}
                />
              </UiElementLayout>

              <UiElementLayout className={styles?.sep} />
            </UiElementLayout>
          );
        })}
      </UiElementLayout>
      <UiElementLayout className={styles.totalContent}>
        <UiTypography>Total</UiTypography>
        <UiTypography>{data?.total}</UiTypography>
      </UiElementLayout>
    </UiElementLayout>
  );
};

export default CartModal;
