import { memo, ReactElement, useEffect, useMemo, useState } from 'react';

import { ThemeTypeEnum } from '@pokemon-pet-shop/store';
import { classNamesUtil } from '@pokemon-pet-shop/utils';

import { UiElementLayout } from '../element.layout';
import { UiIcon } from '../icon';

import { SwitchProps } from './switch.theme.interface';
import { styles } from './switch.theme.module';

const Switch = ({
  className,
  iconLeft,
  iconRight,
  defaultValue = ThemeTypeEnum.LIGHT,
}: SwitchProps): ReactElement => {
  const [theme, setTheme] = useState<ThemeTypeEnum>();

  const turnLightOnClick = () => {
    setTheme(ThemeTypeEnum.LIGHT);
  };

  const turnDarkOnClick = () => {
    setTheme(ThemeTypeEnum.DARK);
  };

  const getCircleThemeStyle = useMemo(() => {
    if (theme === ThemeTypeEnum.LIGHT) {
      return styles.circleLightPosition;
    }
    return styles.circleDarkPosition;
  }, [theme]);

  useEffect(() => {
    setTheme(defaultValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UiElementLayout className={classNamesUtil(className, styles.switchWrapper)}>
      <UiIcon
        icon={iconLeft}
        size={20}
        classNameIcon={classNamesUtil(styles.icon, styles.iconLeft)}
        isDisabled={theme === ThemeTypeEnum.LIGHT}
        onClick={turnLightOnClick}
      />
      <UiIcon
        icon={iconRight}
        size={20}
        classNameIcon={classNamesUtil(styles.icon, styles.iconRight)}
        isDisabled={theme === ThemeTypeEnum.DARK}
        onClick={turnDarkOnClick}
      />
      <UiElementLayout className={classNamesUtil(styles.iconCircle, getCircleThemeStyle)} />
    </UiElementLayout>
  );
};

export default memo(Switch);
