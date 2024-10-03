import { ReactElement } from 'react';

import { useRenderStyles } from '@pokemon-pet-shop/hooks';
import { ThemeTypeEnum, useThemeStore } from '@pokemon-pet-shop/store';
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
import { THEME_BLUE_600, THEME_NETURAL_100, THEME_RED_400 } from '@pokemon-pet-shop/ui/styles/var';
import { capitalizeNameUtil, classNamesUtil, pricingFormatUSD } from '@pokemon-pet-shop/utils';

import { usePokemonThemeLogic } from '../../pokemon/hooks/use.pokemon.theme.logic';

import { styles } from './cart.modal.module';
import useCartModalItemLogic from './use.cart.modal.item.logic';

const CartModalItem = ({ el }: any): ReactElement => {
  const {
    updateIsPending,
    deleteIsPending,
    onHandleRemoveFromCart,
    onHandleAddToCart,
    onHandleRemoveCartItem,
  } = useCartModalItemLogic();
  const { theme } = useThemeStore();
  const { newStyles } = useRenderStyles(styles);
  const { getThemeClass } = usePokemonThemeLogic(el?.types);

  return (
    <UiElementLayout className={newStyles?.cartWrapper}>
      <UiElementLayout className={newStyles.cardContentRow}>
        <UiElementLayout
          className={classNamesUtil(
            newStyles.imageWrapper,
            newStyles?.[`${getThemeClass}ImageWrapper`]
          )}
        >
          <UiImage
            src={el?.image}
            className={newStyles.image}
            alt={`${el?.name} Image`}
            mobSrcType={mobSrcTypeEnum.URI}
          />
        </UiElementLayout>
        <UiElementLayout className={newStyles?.middleRow}>
          <UiTypography className={newStyles.itemName} typographyType={TypographyTypeEnum.H1}>
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
              color={theme === ThemeTypeEnum.LIGHT ? THEME_BLUE_600 : THEME_NETURAL_100}
              isDisabled={el?.quantity === 1 || updateIsPending}
              onClick={() => onHandleRemoveFromCart(el?.id)}
            />
            <UiTypography>{el?.quantity}</UiTypography>
            <UiIcon
              icon={IconTypeEnum.ICON_PLUS}
              color={theme === ThemeTypeEnum.LIGHT ? THEME_BLUE_600 : THEME_NETURAL_100}
              classNameIcon={styles.quantityIcon}
              isDisabled={updateIsPending}
              onClick={() => onHandleAddToCart(el?.id)}
            />
          </UiElementLayout>
        </UiElementLayout>

        <UiIcon
          icon={IconTypeEnum.ICON_TRASH}
          color={THEME_RED_400}
          isDisabled={deleteIsPending}
          onClick={() => onHandleRemoveCartItem(el?.id)}
        />
      </UiElementLayout>

      <UiElementLayout className={newStyles?.sep} />
    </UiElementLayout>
  );
};

export default CartModalItem;
