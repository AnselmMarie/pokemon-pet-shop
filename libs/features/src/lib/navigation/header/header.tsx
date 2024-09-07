import { useMemo } from 'react';

import { pokeshopLogo } from '@pokemon-pet-shop/assets';
import { useGetCart } from '@pokemon-pet-shop/services';
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
  const { data } = useGetCart();

  const getCartCounter = useMemo(() => {
    let counter = 0;
    (data || []).forEach((el) => {
      counter = counter + el.quantity;
    });

    return counter;
  }, [data]);

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

        <UiElementLayout>
          <UiTypography>{getCartCounter}</UiTypography>
          <UiIcon classNameIcon={styles.iconCart} />
        </UiElementLayout>
      </UiContainer>
    </UiElementLayout>
  );
};

export default Header;
