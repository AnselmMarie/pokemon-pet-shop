import { SafeAreaView } from 'react-native-safe-area-context';

import { Box } from '@pokemon-pet-shop/ui-box';

import { HeaderContent } from './header-content';

export const Header = () => {
  return (
    <Box className="space-between h-[93px] fixed w-full top-[0px] z-40 px-lg py-xs shadow bg-white">
      <SafeAreaView>
        <HeaderContent />
      </SafeAreaView>
    </Box>
  );
};
