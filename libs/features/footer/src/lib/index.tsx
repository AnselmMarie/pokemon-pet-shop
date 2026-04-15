import { Box, Link, Typography } from '@pokemon-pet-shop/ui-primitives';
import { Icon } from '@pokemon-pet-shop/ui-components';

export const Footer = () => {
  return (
    <Box
      className="flex flex-row items-center justify-center h-[40px] mt-2xl mx-md gap-lg"
      as="footer"
    >
      <Link
        className="flex flex-row items-center"
        link="https://github.com/AnselmMarie/pokemon-pet-shop/tree/mfe"
      >
        <Icon icon="IconGithub" size={20} classNameIcon="mr-xs" color="black" />
        <Typography>Github Project</Typography>
      </Link>

      <Typography className="p-10 md:block">|</Typography>

      <Link
        className="flex flex-row items-center"
        link="https://github.com/AnselmMarie/pokemon-pet-shop/issues?q=state%3Aopen%20label%3A%22mfe%22"
      >
        <Icon icon="IconSearch" size={20} classNameIcon="mr-xs" color="black" />
        <Typography>Github Issues</Typography>
      </Link>

      {/* Once the mobile app version is built out I can uncomment the code below. */}
      {/* <Typography className="hidden md:p-10 md:block">|</Typography>
      <Box className="flex items-center">
        <Icon
        // stroke={
        //   theme === ThemeTypeEnum.LIGHT
        //     ? THEME_NETURAL_900
        //     : THEME_NETURAL_100
        // }
        />
        <Typography>Scan QR code for mobile app</Typography>
      </Box> */}
    </Box>
  );
};
