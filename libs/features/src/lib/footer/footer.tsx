import {
  IconTypeEnum,
  UiElementLayout,
  UiIcon,
  UiIconPokeType,
  UiTypography,
  IconPokeTypeEnum,
} from '@pokemon-pet-shop/ui';

import { styles } from './footer.module';

const Footer = () => {
  const goToGithubProject = () => {
    window.location.href = 'http://www.apple.com';
  };

  return (
    <UiElementLayout className={styles.footerWrapper}>
      <UiIcon
        icon={IconTypeEnum.ICON_GITHUB}
        size={20}
        classNameIcon={styles.githubIcon}
        onClick={goToGithubProject}
      />
      <UiIconPokeType type={IconPokeTypeEnum.GITHUB} size="30px" />
      <UiTypography>Github Project</UiTypography>
      <UiTypography className={styles.footerDivider}>|</UiTypography> <UiIcon />
      <UiTypography>Scan QR code for mobile app</UiTypography>
    </UiElementLayout>
  );
};

export default Footer;
