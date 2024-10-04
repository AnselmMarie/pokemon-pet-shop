import { ReactElement } from 'react';

import { useRenderStyles } from '@pokemon-pet-shop/hooks';
import { UiElementLayout, UiTypography } from '@pokemon-pet-shop/ui';

import { UiSwitchTheme } from '../component/switch.theme';

import { styles } from './nav.mobile.module';

const NavMobileModal = (): ReactElement => {
  const { newStyles } = useRenderStyles(styles);

  return (
    <UiElementLayout className={newStyles.innerModal}>
      <UiElementLayout className={newStyles.navWrapper}>
        <UiElementLayout className={newStyles.linkWrapper}>
          <UiTypography>PETS</UiTypography>
        </UiElementLayout>

        <UiElementLayout className={newStyles.switchWrapper}>
          <UiSwitchTheme />
        </UiElementLayout>
      </UiElementLayout>
    </UiElementLayout>
  );
};

export default NavMobileModal;
