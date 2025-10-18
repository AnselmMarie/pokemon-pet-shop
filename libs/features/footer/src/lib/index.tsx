import { Box } from '@ui/box';
import { Link } from '@ui/link';
import { Icon } from '@ui/icon';
import { Typography } from '@ui/typography';
// import { ThemeTypeEnum, useThemeStore } from '@pokemon-pet-shop/store';
// import { IconTypeEnum, UiElementLayout, UiIcon, UiLink, UiTypography } from '@pokemon-pet-shop/ui';
// import { THEME_NETURAL_100, THEME_NETURAL_900 } from '@pokemon-pet-shop/ui/styles/var';

// import { styles } from './footer.module';

export const Footer = () => {
  // const { theme } = useThemeStore();

  return (
    <Box
      className="flex flex-col md:flex-row items-center justify-center mb-12"
      // layoutType="footer"
    >
      <Link
        className="flex items-center"
        link="https://github.com/AnselmMarie/pokemon-pet-shop"
      >
        <Icon
          icon="IconGithub"
          size={20}
          classNameIcon="mr-2"
          stroke="none"
          // fill={
          //   theme === ThemeTypeEnum.LIGHT
          //     ? THEME_NETURAL_900
          //     : THEME_NETURAL_100
          // }
        />
        <Typography>Github Project</Typography>
      </Link>

      <Typography className="hidden md:p-10 md:block">|</Typography>
      <Box className="flex items-center">
        <Icon
        // stroke={
        //   theme === ThemeTypeEnum.LIGHT
        //     ? THEME_NETURAL_900
        //     : THEME_NETURAL_100
        // }
        />
        <Typography>Scan QR code for mobile app</Typography>
      </Box>
    </Box>
  );
};
