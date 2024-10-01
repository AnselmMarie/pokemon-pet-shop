import {
  IconColorEnum,
  IconTypeEnum,
  UiElementLayout,
  UiIcon,
  UiTypography,
} from '@pokemon-pet-shop/ui';

import { styles } from './footer.module';

const Footer = () => {
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
          color={IconColorEnum.BLACK}
        />
        <UiTypography>Github Project</UiTypography>
      </UiElementLayout>
      <UiTypography className={styles.footerDivider}>|</UiTypography>
      <UiIcon color={IconColorEnum.BLACK} />
      <UiTypography>Scan QR code for mobile app</UiTypography>
    </UiElementLayout>
  );
};

export default Footer;
