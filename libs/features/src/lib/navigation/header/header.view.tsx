import { pokeshopLogo } from '@pokemon-pet-shop/assets';
import { useRenderStyles } from '@pokemon-pet-shop/hooks';
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
  UiServerError,
} from '@pokemon-pet-shop/ui';
import { THEME_BLUE_400 } from '@pokemon-pet-shop/ui/styles/var';

import { UiSwitchTheme } from '../component/switch.theme';

import { NAV_FEATURE_FLAG } from './header.const';
import { styles } from './header.module';
import useHeaderLogic from './use.header.logic';

const Header = () => {
  const { data, onHandleCartModalClick, onHandleMobileNavModalClick } = useHeaderLogic();
  const { newStyles } = useRenderStyles(styles);

  return (
    <UiElementLayout layoutType={ElementLayoutTypeEnum.HEADER} className={newStyles.headerWrapper}>
      <UiContainer className={newStyles.container}>
        <UiElementLayout className={newStyles.leftWrapper}>
          <UiIcon
            classNameIcon={newStyles.iconMenu}
            icon={IconTypeEnum.ICON_MENU}
            onClick={onHandleMobileNavModalClick}
          />
          <UiImage src={pokeshopLogo} className={newStyles.logo} />
        </UiElementLayout>

        {NAV_FEATURE_FLAG ? (
          <UiElementLayout layoutType={ElementLayoutTypeEnum.NAV} className={newStyles.nav}>
            <UiTypography typographyType={TypographyTypeEnum.SPAN} className={newStyles.navTitle}>
              PETS
            </UiTypography>
            <UiInput iconClassname={newStyles.icon} appendIcon={IconTypeEnum.ICON_SEARCH} />
          </UiElementLayout>
        ) : null}

        <UiElementLayout className={newStyles.rightWrapper}>
          <UiHideInMobile>
            <UiSwitchTheme className={newStyles.switchTheme} />
          </UiHideInMobile>

          <UiElementLayout className={newStyles.cartWrapper}>
            {data?.counter ? (
              <UiElementLayout
                className={newStyles.counterWrapper}
                onClick={onHandleCartModalClick}
              >
                <UiTypography
                  typographyType={TypographyTypeEnum.SPAN}
                  className={newStyles.counterText}
                >
                  {data?.counter}
                </UiTypography>
              </UiElementLayout>
            ) : null}
            <UiIcon
              classNameIcon={newStyles.iconCart}
              color={THEME_BLUE_400}
              onClick={onHandleCartModalClick}
            />
          </UiElementLayout>
        </UiElementLayout>
      </UiContainer>
      <UiServerError />
    </UiElementLayout>
  );
};

export default Header;
