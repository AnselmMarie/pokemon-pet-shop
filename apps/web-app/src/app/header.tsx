import { pokeshopLogo } from '@pokemon-pet-shop/assets';
import {
  UiElementLayout,
  ElementLayoutTypeEnum,
  UiImage,
  UiIcon,
  IconTypeEnum,
  UiInput,
  UiSwitch,
} from '@pokemon-pet-shop/ui';
import classNames from 'classnames';

import styles from './header.module.css';

const Header = () => {
  return (
    <UiElementLayout layoutType={ElementLayoutTypeEnum.HEADER} className={styles.headerWrapper}>
      <UiImage src={pokeshopLogo} className="logo" width="160" />

      <UiElementLayout
        layoutType={ElementLayoutTypeEnum.NAV}
        className={classNames(styles.nav, styles.navBg)}
      >
        <UiElementLayout layoutType={ElementLayoutTypeEnum.SPAN} className={styles.navTitle}>
          PETS
        </UiElementLayout>
        <UiInput appendIcon={IconTypeEnum.ICON_SEARCH} />
      </UiElementLayout>

      <UiSwitch iconLeft={IconTypeEnum.ICON_SUN} iconRight={IconTypeEnum.ICON_MOON} />

      <UiIcon classNameIcon={styles.icon} />
    </UiElementLayout>
  );
};

export default Header;
