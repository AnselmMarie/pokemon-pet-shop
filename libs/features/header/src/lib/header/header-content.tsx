import { useState } from 'react';

import { SwitchTheme } from '@features/switch-theme';

import { Box } from '@ui/box';
import { Container } from '@ui/container';
import { Icon } from '@ui/icon';
import { Image } from '@ui/image';
import { HideInMobile } from '@ui/hide-in-mobile';

import { NavMobileModal } from '../modal-mobile-nav/nav-mobile';
import { SideNavModal } from './side-nav-modal';
import { NAV_FEATURE_FLAG } from './header.const';
import pokeshopLogo from './assets/pokeshop-logo.png';

export const HeaderContent = () => {
  const [isNavModalOpen, setIsNavModalOpen] = useState(false);

  return (
    <>
      <NavMobileModal isOpen={isNavModalOpen} onCloseModal={() => setIsNavModalOpen(false)} />
      <Container className="flex w-full flex-row items-center justify-between">
        <Box className="flex flex-row justify-start items-center">
          <Icon
            classNameIcon="md:hidden"
            icon="IconMenu"
            stroke="blue"
            fill="white"
            onClick={() => setIsNavModalOpen(true)}
          />
          <Image src={pokeshopLogo} className="w-[195px]" alt="Pokemon Pet Shop Logo" />
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

        <Box className="flex flex-row items-center gap-sm">
          <HideInMobile>
            <SwitchTheme className="invisible md:visible" />
          </HideInMobile>
          <SideNavModal />
        </Box>
      </Container>
    </>
  );
};
