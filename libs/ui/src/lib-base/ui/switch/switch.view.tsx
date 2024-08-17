import { memo, ReactElement, useEffect, useMemo, useState } from 'react';

import classnames from 'classnames';

import { UiElementLayout } from '../element.layout';
import { UiIcon } from '../icon';

import { ThemeModeEnum } from './switch.enum';
import { SwitchProps } from './switch.interface';
import styles from './switch.module.css';

const Switch = ({
  iconLeft,
  iconRight,
  defaultValue = ThemeModeEnum.LIGHT,
}: SwitchProps): ReactElement => {
  const [theme, setTheme] = useState<ThemeModeEnum>();

  const turnLightOnClick = () => {
    setTheme(ThemeModeEnum.LIGHT);
  };

  const turnDarkOnClick = () => {
    setTheme(ThemeModeEnum.DARK);
  };

  const getCircleThemeStyle = useMemo(() => {
    if (theme === ThemeModeEnum.LIGHT) {
      return styles.circleLightPosition;
    }
    return styles.circleDarkPosition;
  }, [theme]);

  useEffect(() => {
    setTheme(defaultValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UiElementLayout className={styles.switchWrapper}>
      <UiIcon
        icon={iconLeft}
        size={20}
        classNameIcon={classnames(styles.icon, styles.iconLeft)}
        isDisabled={theme === ThemeModeEnum.LIGHT}
        onClick={turnLightOnClick}
      />
      <UiIcon
        icon={iconRight}
        size={20}
        classNameIcon={classnames(styles.icon, styles.iconRight)}
        isDisabled={theme === ThemeModeEnum.DARK}
        onClick={turnDarkOnClick}
      />
      <UiElementLayout className={classnames(styles.iconCircle, getCircleThemeStyle)} />
    </UiElementLayout>
  );
};

export default memo(Switch);
