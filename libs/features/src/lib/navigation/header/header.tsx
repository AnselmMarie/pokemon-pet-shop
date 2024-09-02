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
  UiHideInMobile,
} from '@pokemon-pet-shop/ui';

import { styles } from './header.module';

const Header = () => {
  return (
    <UiElementLayout layoutType={ElementLayoutTypeEnum.HEADER} className={styles.headerWrapper}>
      <UiContainer className={styles.container}>
        <UiHideInMobile>
          <UiImage src={pokeshopLogo} className={styles.logo} width="160" />
        </UiHideInMobile>
        <UiIcon classNameIcon={styles.iconMenu} icon={IconTypeEnum.ICON_MENU} />

        <UiElementLayout layoutType={ElementLayoutTypeEnum.NAV} className={styles.nav}>
          <UiTypography typographyType={TypographyTypeEnum.SPAN} className={styles.navTitle}>
            PETS
          </UiTypography>
          <UiInput appendIcon={IconTypeEnum.ICON_SEARCH} />
        </UiElementLayout>

        <UiHideInMobile>
          <UiSwitch
            className={styles.switchTheme}
            iconLeft={IconTypeEnum.ICON_SUN}
            iconRight={IconTypeEnum.ICON_MOON}
          />
        </UiHideInMobile>

        <UiIcon classNameIcon={styles.iconCart} />
      </UiContainer>
    </UiElementLayout>
  );
};

export default Header;