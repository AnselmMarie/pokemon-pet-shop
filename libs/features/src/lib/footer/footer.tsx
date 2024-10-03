import { ThemeTypeEnum, useThemeStore } from '@pokemon-pet-shop/store';
import { IconTypeEnum, UiElementLayout, UiIcon, UiTypography } from '@pokemon-pet-shop/ui';
import { THEME_NETURAL_100, THEME_NETURAL_900 } from '@pokemon-pet-shop/ui/styles/var';

import { styles } from './footer.module';

const Footer = () => {
  const { theme } = useThemeStore();

  const goToGithubProject = () => {
    window.open('https://github.com/AnselmMarie/pokemon-pet-shop', '_blank');
  };

  return (
    <UiElementLayout className={styles.footerWrapper}>
      <UiElementLayout className={styles.githubWrapper} onClick={goToGithubProject}>
        <UiIcon
          icon={IconTypeEnum.ICON_GITHUB}
          size={20}
          classNameIcon={styles.githubIcon}
          color={theme === ThemeTypeEnum.LIGHT ? THEME_NETURAL_900 : THEME_NETURAL_100}
        />
        <UiTypography>Github Project</UiTypography>
      </UiElementLayout>
      <UiTypography className={styles.footerDivider}>|</UiTypography>
      <UiElementLayout className={styles.scanWrapper}>
        <UiIcon color={theme === ThemeTypeEnum.LIGHT ? THEME_NETURAL_900 : THEME_NETURAL_100} />
        <UiTypography>Scan QR code for mobile app</UiTypography>
      </UiElementLayout>
    </UiElementLayout>
  );
};

export default Footer;
