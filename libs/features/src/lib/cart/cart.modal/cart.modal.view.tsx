import { ReactElement } from 'react';

import { useRenderStyles } from '@pokemon-pet-shop/hooks';
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
import { globalStyles } from '@pokemon-pet-shop/ui/styles/global';
import { capitalizeNameUtil, classNamesUtil, pricingFormatUSD } from '@pokemon-pet-shop/utils';

import CartModalScroll from './cart.modal.content.scroll';
import { styles } from './cart.modal.module';
import useCartModalLogic from './use.cart.modal.logic';

const CartModal = (): ReactElement => {
  const { data, onHandleRemoveFromCart, onHandleAddToCart, onHandleRemoveCartItem } =
    useCartModalLogic();
  const { newStyles } = useRenderStyles(styles);

  return (
    <UiElementLayout className={newStyles.modal}>
      <CartModalScroll>
        {(data?.data || [])?.map((el: CartDataContentApi, i: number) => {
          return (
            <UiElementLayout key={i} className={newStyles?.cartWrapper}>
              <UiElementLayout className={newStyles.cardContentRow}>
                <UiImage
                  src={el?.image}
                  className={newStyles.image}
                  alt={`${el?.name} Image`}
                  mobSrcType={mobSrcTypeEnum.URI}
                />
                <UiElementLayout className={newStyles?.middleRow}>
                  <UiTypography
                    className={newStyles.itemName}
                    typographyType={TypographyTypeEnum.H1}
                  >
                    {capitalizeNameUtil(el?.name)}
                  </UiTypography>
                  <UiTypography
                    typographyType={TypographyTypeEnum.SPAN}
                    className={classNamesUtil(newStyles.price, globalStyles.fontBold)}
                  >
                    {pricingFormatUSD(el?.price)}
                  </UiTypography>

                  <UiElementLayout className={styles.quantityWrapper}>
                    <UiIcon
                      icon={IconTypeEnum.ICON_MINUS}
                      classNameIcon={styles.quantityIcon}
                      onClick={() => onHandleRemoveFromCart(el?.id)}
                    />
                    <UiTypography>{el?.quantity}</UiTypography>
                    <UiIcon
                      icon={IconTypeEnum.ICON_PLUS}
                      classNameIcon={styles.quantityIcon}
                      onClick={() => onHandleAddToCart(el?.id)}
                    />
                  </UiElementLayout>
                </UiElementLayout>

                <UiIcon
                  icon={IconTypeEnum.ICON_TRASH}
                  onClick={() => onHandleRemoveCartItem(el?.id)}
                />
              </UiElementLayout>

              <UiElementLayout className={newStyles?.sep} />
            </UiElementLayout>
          );
        })}
      </CartModalScroll>
      <UiElementLayout className={newStyles.totalContent}>
        <UiTypography>Total</UiTypography>
        <UiTypography>{pricingFormatUSD(data?.total)}</UiTypography>
      </UiElementLayout>
    </UiElementLayout>
  );
};

export default CartModal;
