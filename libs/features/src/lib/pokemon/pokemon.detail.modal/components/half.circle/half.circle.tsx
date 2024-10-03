import { ThemeTypeEnum, useThemeStore } from '@pokemon-pet-shop/store';
import { UiElementLayout } from '@pokemon-pet-shop/ui';
import { classNamesUtil } from '@pokemon-pet-shop/utils';

import { styles } from './half.circle.module';

const HalfCircle = () => {
  const { theme } = useThemeStore();
  return (
    <UiElementLayout
      className={classNamesUtil(
        styles.contentCurve,
        theme === ThemeTypeEnum.LIGHT ? styles.contentCurveLight : styles.contentCurveDark
      )}
    />
  );
};

export default HalfCircle;
