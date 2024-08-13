import { memo, ReactElement, useCallback, useMemo, useState } from 'react';

import classnames from 'classnames';
import { useController } from 'react-hook-form';

import { UiElementLayout } from '../element-layout';
import { UiIcon } from '../icon';

// import { SwitchTypeEnum } from './switch.enum';
import { SwitchProps } from './switch.interface';
import styles from './switch.module.css';

const Switch = ({ iconLeft, iconRight, defaultValue = null }: SwitchProps): ReactElement => {
  // const { field } = useController({
  //   control,
  //   defaultValue,
  //   name,
  // });
  const [theme, setTheme] = useState('light');

  const turnLightOnClick = () => {
    setTheme('light');
  };

  const turnDarkOnClick = () => {
    setTheme('dark');
  };

  const getCircleThemeStyle = useMemo(() => {
    if (theme === 'light') {
      return styles.circleLightPosition;
    }
    return styles.circleDarkPosition;
  }, [theme]);

  console.log('theme', theme);

  return (
    <UiElementLayout className={styles.switchWrapper}>
      <UiIcon
        icon={iconLeft}
        size={20}
        classNameIcon={classnames(styles.icon, styles.iconLeft)}
        isDisabled={theme === 'light'}
        onClick={turnLightOnClick}
      />
      <UiIcon
        icon={iconRight}
        size={20}
        classNameIcon={classnames(styles.icon, styles.iconRight)}
        onClick={turnDarkOnClick}
      />
      <UiElementLayout className={classnames(styles.iconCircle, getCircleThemeStyle)} />
    </UiElementLayout>
  );
};

export default memo(Switch);
