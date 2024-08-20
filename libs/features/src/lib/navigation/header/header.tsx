import { pokeshopLogo } from '@pokemon-pet-shop/assets';
import {
  UiElementLayout,
  ElementLayoutTypeEnum,
  UiImage,
  UiIcon,
  IconTypeEnum,
  UiInput,
  UiSwitch,
  UiTypography,
  TypographyTypeEnum,
  UiContainer,
} from '@pokemon-pet-shop/ui';
import classNames from 'classnames';

import styles from './header.module.css';

const Header = () => {
  return (
    <UiElementLayout layoutType={ElementLayoutTypeEnum.HEADER} className={styles.headerWrapper}>
      <UiContainer className={styles.container}>
        <UiImage src={pokeshopLogo} className={styles.logo} width="160" />
        <UiIcon classNameIcon={styles.iconMenu} icon={IconTypeEnum.ICON_MENU} />

        <UiElementLayout
          layoutType={ElementLayoutTypeEnum.NAV}
          className={classNames(styles.nav, styles.navBg)}
        >
          <UiTypography typographyType={TypographyTypeEnum.SPAN} className={styles.navTitle}>
            PETS
          </UiTypography>
          <UiInput appendIcon={IconTypeEnum.ICON_SEARCH} />
        </UiElementLayout>

        <UiSwitch
          className={styles.switchTheme}
          iconLeft={IconTypeEnum.ICON_SUN}
          iconRight={IconTypeEnum.ICON_MOON}
        />

        <UiIcon classNameIcon={styles.iconCart} />
      </UiContainer>
    </UiElementLayout>
  );
};

export default Header;
