import { ReactElement } from 'react';

import {
  UiElementLayout,
  UiIcon,
  IconTypeEnum,
  UiTypography,
  UiModal,
  ModalAlignmentEnum,
} from '@pokemon-pet-shop/ui';

import { CartModalProps } from './cart.modal.interface';
import styles from './cart.modal.module.css';

const CartModal = ({ isModalShown = false }: CartModalProps): ReactElement => {
  return (
    <UiModal
      isModalShown={isModalShown}
      classNameModal={styles.modal}
      modalAlignment={ModalAlignmentEnum.RIGHT}
    >
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
