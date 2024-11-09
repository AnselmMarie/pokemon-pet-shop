import { ThemeTypeEnum, useThemeStore } from '@pokemon-pet-shop/store';
import { IconTypeEnum, UiElementLayout, UiIcon, UiLink, UiTypography } from '@pokemon-pet-shop/ui';
import { THEME_NETURAL_100, THEME_NETURAL_900 } from '@pokemon-pet-shop/ui/styles/var';

import { styles } from './footer.module';

const Footer = () => {
  const { theme } = useThemeStore();

  return (
    <UiElementLayout className={styles.footerWrapper}>
      <UiLink
        className={styles.githubWrapper}
        link="https://github.com/AnselmMarie/pokemon-pet-shop"
      >
        <UiIcon
          icon={IconTypeEnum.ICON_GITHUB}
          size={20}
          classNameIcon={styles.githubIcon}
          stroke="none"
          fill={theme === ThemeTypeEnum.LIGHT ? THEME_NETURAL_900 : THEME_NETURAL_100}
        />
        <UiTypography>Github Project</UiTypography>
      </UiLink>
      <UiTypography className={styles.footerDivider}>|</UiTypography>
      <UiElementLayout className={styles.scanWrapper}>
        <UiIcon stroke={theme === ThemeTypeEnum.LIGHT ? THEME_NETURAL_900 : THEME_NETURAL_100} />
        <UiTypography>Scan QR code for mobile app</UiTypography>
      </UiElementLayout>
    </UiElementLayout>
  );
};

export default Footer;
