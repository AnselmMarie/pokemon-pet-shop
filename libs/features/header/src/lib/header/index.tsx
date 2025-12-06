import { useState } from 'react';

import { SwitchTheme } from '@features/switch-theme';
import { CartModal } from '@features/modal-cart';

import { Box } from '@ui/box';
import { Container } from '@ui/container';
import { Icon } from '@ui/icon';
import { Image } from '@ui/image';
import { HideInMobile } from '@ui/hide-in-mobile';
import { Typography } from '@ui/typography';

import { useGetCart } from '@services/cart-api';

import { NavMobileModal } from '../modal-mobile-nav/nav-mobile';
import { NAV_FEATURE_FLAG } from './header.const';
import pokeshopLogo from './assets/pokeshop-logo.png';

export const Header = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isNavModalOpen, setIsNavModalOpen] = useState(false);
  const { data } = useGetCart();

  return (
    <Box
      as="header"
      className="space-between h-[93px] fixed w-full top-[0px] z-40 px-md py-xs shadow bg-white"
    >
      <CartModal
        isOpen={isCartModalOpen}
        onCloseModal={() => setIsCartModalOpen(false)}
      />
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
          <Box className="flex justify-center items-center relative">
            <Icon classNameIcon="ml-2 red" size={28} />
            {data?.counter ? (
              <Box className="rounded-circle bg-medYellow min-w-[23px] min-h-[23px] align-center inline-block p-3 absolute -top-[15px] -right-[11px] pointer">
                <Typography className="flex justify-center item-center text-primary font-bold">
                  {data?.counter}
                </Typography>
              </Box>
            ) : null}

            <Box
              className="absolute w-[51px] h-[47px] z-13 -top-[14px]"
              onClick={() => setIsCartModalOpen(true)}
            />
          </Box>
        </Box>
      </Container>
      <Box />
    </Box>
  );
};
