import { useState, lazy, Suspense } from 'react';

import { SwitchTheme } from '@features/switch-theme';

import { Box } from '@ui/box';
import { Container } from '@ui/container';
import { Icon } from '@ui/icon';
import { Image } from '@ui/image';
import { HideInMobile } from '@ui/hide-in-mobile';

import { NavMobileModal } from '../modal-mobile-nav/nav-mobile';
import { NAV_FEATURE_FLAG } from './header.const';
import pokeshopLogo from './assets/pokeshop-logo.png';

const SideCartModal = lazy(() => import('modal-side-cart/Module'));

export const Header = () => {
  const [isNavModalOpen, setIsNavModalOpen] = useState(false);

  return (
    <Box
      as="header"
      className="space-between h-[93px] fixed w-full top-[0px] z-40 px-md py-xs shadow bg-white"
    >
      <NavMobileModal
        isOpen={isNavModalOpen}
        onCloseModal={() => setIsNavModalOpen(false)}
      />
      <Container className="flex item-center justify-between">
        <Box className="flex justify-center items-center">
          <Icon
            classNameIcon="md:hidden"
            icon="IconMenu"
            onClick={() => setIsNavModalOpen(true)}
          />
          <Image
            src={pokeshopLogo}
            className="w-[195px]"
            alt="Pokemon Pet Shop Logo"
          />
        </Box>

        {NAV_FEATURE_FLAG ? (
          <Box
            as="nav"
            className="w-full flex my-0 mx-1 p-1 items-center rounded-sm shadow bg-white"
          >
            <Box as="span" className="mr-1">
              PETS
            </Box>
            {/* <Input
            iconClassname={newStyles.icon}
            appendIcon={IconTypeEnum.ICON_SEARCH}
            /> */}
          </Box>
        ) : null}

        <Box className="flex items-center gap-sm">
          <HideInMobile>
            <SwitchTheme className="invisible md:visible" />
          </HideInMobile>
          <Suspense fallback={null}>
            <SideCartModal />
          </Suspense>
        </Box>
      </Container>
      <Box />
    </Box>
  );
};
