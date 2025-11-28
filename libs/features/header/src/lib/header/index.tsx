import { useState } from 'react';

import { SwitchTheme } from '@features/switchTheme';
import { CartModal } from '@features/modalCart';

import { Box } from '@ui/box';
import { Container } from '@ui/container';
import { Icon } from '@ui/icon';
import { Image } from '@ui/image';
import { HideInMobile } from '@ui/hideInMobile';

import { useGetCart } from '@services/cart-api';

import { NAV_FEATURE_FLAG } from './header.const';
import pokeshopLogo from './assets/pokeshop-logo.png';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useGetCart();

  return (
    <Box
      as="header"
      className="space-between h-[93px] sticky z-40 px-md py-xs shadow bg-white"
    >
      <CartModal
        isOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
      />
      <Container className="flex item-center justify-between">
        <Box className="flex justify-center items-center">
          <Icon
            classNameIcon="md:hidden"
            icon="IconMenu"
            // onClick={() => setIsModalOpen(true)}
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
              <Box className="rounded-sm min-w-[23px] min-h-[23px] align-center inline-block p-3 absolute -top-[15px] -right-[11px] pointer">
                <Box as="span" className="align-center">
                  {data?.counter}
                </Box>
              </Box>
            ) : null}

            <Box
              className="absolute w-[51px] h-[47px] z-13 -top-[14px]"
              onClick={() => setIsModalOpen(true)}
            />
          </Box>
        </Box>
      </Container>
      <Box />
    </Box>
  );
};
