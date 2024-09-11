import { pokeshopLogo } from '@pokemon-pet-shop/assets';
import { useGetCart } from '@pokemon-pet-shop/services';
import { ModalHeadlineTypeEnum, useModalStore } from '@pokemon-pet-shop/store';
import { AlignmentEnum } from '@pokemon-pet-shop/typing';
import {
  UiElementLayout,
  ElementLayoutTypeEnum,
  UiImage,
  UiIcon,
  IconTypeEnum,
  UiInput,
  UiTypography,
  TypographyTypeEnum,
  UiContainer,
  UiHideInMobile,
} from '@pokemon-pet-shop/ui';
import { noopUtil } from '@pokemon-pet-shop/utils';

import { UiCartModal } from '../../cart';
import { UiSwitchTheme } from '../component/switch.theme';
import { UiNavMobileModal } from '../nav.mobile';

import { styles } from './header.module';

const Header = () => {
  const { data } = useGetCart();

  const openModal = useModalStore((state) => state.openModal);

  const handleOpenDetailModalClick = () => {
    openModal({
      content: <UiCartModal />,
      options: {
        title: 'Pokecart',
        data: data,
        classNameShadow: '',
        classNameModal: '',
        headlineType: ModalHeadlineTypeEnum.RELATIVE,
        modalAlignment: AlignmentEnum.RIGHT,
      },
      onCallback: () => {
        noopUtil();
      },
    });
  };

  const handleMobileNavModalClick = () => {
    openModal({
      content: <UiNavMobileModal />,
      options: {
        title: 'Menu',
        headlineType: ModalHeadlineTypeEnum.RELATIVE,
        modalAlignment: AlignmentEnum.LEFT,
      },
      onCallback: () => {
        noopUtil();
      },
    });
  };

  return (
    <UiElementLayout layoutType={ElementLayoutTypeEnum.HEADER} className={styles.headerWrapper}>
      <UiContainer className={styles.container}>
        <UiHideInMobile>
          <UiImage src={pokeshopLogo} className={styles.logo} width="160" />
        </UiHideInMobile>
        <UiIcon
          classNameIcon={styles.iconMenu}
          icon={IconTypeEnum.ICON_MENU}
          onClick={handleMobileNavModalClick}
        />

        <UiElementLayout layoutType={ElementLayoutTypeEnum.NAV} className={styles.nav}>
          <UiTypography typographyType={TypographyTypeEnum.SPAN} className={styles.navTitle}>
            PETS
          </UiTypography>
          <UiInput appendIcon={IconTypeEnum.ICON_SEARCH} />
        </UiElementLayout>

        <UiHideInMobile>
          <UiSwitchTheme className={styles.switchTheme} />
        </UiHideInMobile>

        <UiElementLayout onClick={handleOpenDetailModalClick}>
          <UiTypography>{data?.counter}</UiTypography>
          <UiIcon classNameIcon={styles.iconCart} />
        </UiElementLayout>
      </UiContainer>
    </UiElementLayout>
  );
};

export default Header;
