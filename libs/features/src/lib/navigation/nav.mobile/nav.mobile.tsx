import { ReactElement } from 'react';

import {
  UiElementLayout,
  UiIcon,
  IconTypeEnum,
  UiTypography,
  UiModal,
  ModalAlignmentEnum,
  UiSwitch,
} from '@pokemon-pet-shop/ui';

import styles from './nav.mobile.module.css';

const NavMobileModal = ({ isModalShown = false }: any): ReactElement => {
  return (
    <UiModal
      isModalShown={isModalShown}
      classNameModal={styles.modal}
      modalAlignment={ModalAlignmentEnum.LEFT}
    >
      <UiElementLayout className={styles.dropdownTop}>
        <UiElementLayout className={styles.dropdownHeadline}>
          <UiTypography>Menu</UiTypography>
          <UiIcon icon={IconTypeEnum.ICON_X} />
        </UiElementLayout>
      </UiElementLayout>
      <UiElementLayout className={styles.dropdownBtm}>
        <UiSwitch
          className={styles.switchTheme}
          iconLeft={IconTypeEnum.ICON_SUN}
          iconRight={IconTypeEnum.ICON_MOON}
        />
      </UiElementLayout>
    </UiModal>
  );
};

export default NavMobileModal;
