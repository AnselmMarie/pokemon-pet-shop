import { ReactElement } from 'react';

import { UiElementLayout, UiTypography } from '@pokemon-pet-shop/ui';

import { UiSwitchTheme } from '../component/switch.theme';

import { styles } from './nav.mobile.module';

const NavMobileModal = (): ReactElement => {
  return (
    <UiElementLayout className={styles.modal}>
      <UiElementLayout className={styles.navWrapper}>
        <UiElementLayout className={styles.linkWrapper}>
          <UiTypography>PETS</UiTypography>
        </UiElementLayout>

        <UiElementLayout className={styles.switchWrapper}>
          <UiSwitchTheme />
        </UiElementLayout>
      </UiElementLayout>
    </UiElementLayout>
  );
};

export default NavMobileModal;
