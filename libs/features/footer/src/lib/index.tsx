import { Box } from '@ui/box';
import { Link } from '@ui/link';
import { Icon } from '@ui/icon';
import { Typography } from '@ui/typography';

export const Footer = () => {
  return (
    <Box
      className="flex flex-col md:flex-row items-center justify-center h-[40px] mt-2xl mx-md"
      as="footer"
    >
      <Link
        className="flex items-center"
        link="https://github.com/AnselmMarie/pokemon-pet-shop/tree/mfe"
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
