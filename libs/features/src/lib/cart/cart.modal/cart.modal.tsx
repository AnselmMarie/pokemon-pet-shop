import { UiElementLayout, UiIcon, IconTypeEnum, UiTypography, UiModal } from '@pokemon-pet-shop/ui';

import styles from './cart.modal.module.css';

const CartModal = () => {
  return (
    <UiModal>
      <UiElementLayout className={styles.dropdownTop}>
        <UiElementLayout className={styles.dropdownHeadline}>
          <UiTypography>Pokecart</UiTypography>
          <UiIcon icon={IconTypeEnum.ICON_X} />
        </UiElementLayout>
      </UiElementLayout>
      <UiElementLayout className={styles.dropdownBtm}>
        <UiTypography>Total</UiTypography>
        <UiTypography>$550.00</UiTypography>
      </UiElementLayout>
    </UiModal>
  );
};

export default CartModal;
