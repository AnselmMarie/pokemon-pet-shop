import { Box } from '@pokemon-pet-shop/ui-primitives';

import { HeaderContent } from './header-content';

export const Header = () => {
  return (
    <Box
      as="header"
      className="space-between h-[93px] fixed w-full top-[0px] z-40 px-md py-xs shadow bg-white"
    >
      <HeaderContent />
    </Box>
  );
};
