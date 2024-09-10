import { memo, ReactElement, useMemo, useState } from 'react';

import { classNamesUtil, noopUtil } from '@pokemon-pet-shop/utils';

import { UiElementLayout } from '../element.layout';
import { UiIcon } from '../icon';

import { SwitchProps } from './switch.interface';
import { styles } from './switch.module';

const Switch = ({
  className,
  iconLeft = null,
  iconRight = null,
  defaultValue = true,
  isDisabled = false,
  onLeftClick = () => {
    noopUtil();
  },
  onRightClick = () => {
    noopUtil();
  },
}: SwitchProps): ReactElement => {
  const [switchState, setSwitch] = useState(defaultValue);

  const leftClick = () => {
    setSwitch(true);
    onLeftClick();
  };

  const rightClick = () => {
    setSwitch(false);
    onRightClick();
  };

  const getCircleThemeStyle = useMemo(() => {
    if (switchState) {
      return styles.circleLightPosition;
    }
    return styles.circleDarkPosition;
  }, [switchState]);

  return (
    <UiElementLayout className={classNamesUtil(className, styles.switchWrapper)}>
      {iconLeft ? (
        <UiIcon
          icon={iconLeft}
          size={20}
          classNameIcon={classNamesUtil(styles.icon, styles.iconLeft)}
          isDisabled={isDisabled}
          onClick={leftClick}
        />
      ) : null}
      {iconRight ? (
        <UiIcon
          icon={iconRight}
          size={20}
          classNameIcon={classNamesUtil(styles.icon, styles.iconRight)}
          isDisabled={isDisabled}
          onClick={rightClick}
        />
      ) : null}
      <UiElementLayout className={classNamesUtil(styles.iconCircle, getCircleThemeStyle)} />
    </UiElementLayout>
  );
};

export default memo(Switch);
