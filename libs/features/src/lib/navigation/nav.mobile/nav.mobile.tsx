import { ReactElement } from 'react';

import { AlignmentEnum } from '@pokemon-pet-shop/typing';
import {
  UiElementLayout,
  UiIcon,
  IconTypeEnum,
  UiTypography,
  UiModal,
  UiSwitchTheme,
} from '@pokemon-pet-shop/ui';

import { NavMobileModalProps } from './nav.mobile.interface';
import styles from './nav.mobile.module.css';

const NavMobileModal = ({ isModalShown = false }: NavMobileModalProps): ReactElement => {
  return (
    <UiModal
      isModalShown={isModalShown}
      classNameModal={styles.modal}
      modalAlignment={AlignmentEnum.LEFT}
    >
      <UiElementLayout className={styles.dropdownTop}>
        <UiElementLayout className={styles.dropdownHeadline}>
          <UiTypography>Menu</UiTypography>
          <UiIcon icon={IconTypeEnum.ICON_X} />
        </UiElementLayout>
      </UiElementLayout>
      <UiElementLayout className={styles.dropdownBtm}>
        <UiSwitchTheme
          className={styles.switchTheme}
          iconLeft={IconTypeEnum.ICON_SUN}
          iconRight={IconTypeEnum.ICON_MOON}
        />
      </UiElementLayout>
    </UiModal>
  );
};

export default NavMobileModal;
