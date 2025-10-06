// import { useRenderStyles } from '@pokemon-pet-shop/hooks';
// import {
//   UiElementLayout,
//   ElementLayoutTypeEnum,
//   UiImage,
//   UiIcon,
//   IconTypeEnum,
//   UiInput,
//   UiTypography,
//   TypographyTypeEnum,
//   UiContainer,
//   UiHideInMobile,
//   UiServerError,
// } from '@pokemon-pet-shop/ui';
// import { THEME_BLUE_400 } from '@pokemon-pet-shop/ui/styles/var';

// import { UiSwitchTheme } from '../component/switch.theme';

import { Box } from '@ui/box';
import { Container } from '@ui/container';
import { Icon } from '@ui/icon';
// import { Image } from '@ui/image';

import { NAV_FEATURE_FLAG } from './header.const';
// import { styles } from './header.module';
// import pokeshopLogo from './pokeshop-logo.png';
// import useHeaderLogic from './use.header.logic';

export const Header = () => {
  // const { data, onHandleCartModalClick, onHandleMobileNavModalClick } =
  //   useHeaderLogic();

  return (
    <Box
      layoutType="header"
      className="space-between sticky z-99 p-10 shadow bg-slate-100"
    >
      <Container className="flex item-center space-between">
        <Box className="flex item-center">
          <Icon
            classNameIcon="hidden-md"
            icon="IconMenu"
            // onClick={onHandleMobileNavModalClick}
          />
          {/* <Image src={pokeshopLogo} className="w-[160px]" /> */}
        </Box>

        {NAV_FEATURE_FLAG ? (
          <Box
            layoutType="nav"
            className="w-full flex my-0 mx-1 p-1 items-center rounded-sm shadow bg-slate-100"
          >
            <Box layoutType="span" className="mr-1">
              PETS
            </Box>
            {/* <UiInput
              iconClassname={newStyles.icon}
              appendIcon={IconTypeEnum.ICON_SEARCH}
            /> */}
          </Box>
        ) : null}
        <Box className="flex items-center">
          {/* <UiHideInMobile>
            <UiSwitchTheme className={newStyles.switchTheme} />
          </UiHideInMobile> */}

          <Box className="flex justify-center items-center relative">
            <Icon classNameIcon="ml-2" />
            {/* {data?.counter ? (
              <Box className="rounded-sm min-w-[23px] min-h-[23px] align-center inline-block p-3 absolute -top-[15px] -right-[11px] pointer">
                <Box layoutType="span" className="align-center">
                  {data?.counter}
                </Box>
              </Box>
            ) : null} */}

            <Box
              className="absolute w-[51px] h-[47px] z-13 -top-[14px]"
              // onClick={onHandleCartModalClick}
            />
          </Box>
        </Box>
      </Container>
      <Box />
    </Box>
  );
};
