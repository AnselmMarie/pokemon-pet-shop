import { memo, ReactElement, useEffect, useMemo, useState } from 'react';

import { classNamesUtil, noopUtil } from '@pokemon-pet-shop/utils';

import { UiElementLayout } from '../element.layout';
import { UiIcon } from '../icon';

import { SwitchStatusEnum } from './switch.enum';
import { SwitchProps } from './switch.interface';
import { styles } from './switch.module';

const Switch = ({
  className,
  iconLeft = null,
  iconRight = null,
  defaultValue = SwitchStatusEnum.ON,
  isDisabled = false,
  val = null,
  onLeftClick = () => {
    noopUtil();
  },
  onRightClick = () => {
    noopUtil();
  },
}: SwitchProps): ReactElement => {
  const [switchState, setSwitch] = useState(defaultValue);

  const leftClick = () => {
    setSwitch(SwitchStatusEnum.ON);
    onLeftClick();
  };

  const rightClick = () => {
    setSwitch(SwitchStatusEnum.OFF);
    onRightClick();
  };

  const getCircleThemeStyle = useMemo(() => {
    if (switchState === SwitchStatusEnum.ON) {
      return styles.circleLightPosition;
    }
    return styles.circleDarkPosition;
  }, [switchState]);

  useEffect(() => {
    if (val) {
      setSwitch(val);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [val]);

  return (
    <UiElementLayout className={classNamesUtil(className, styles.switchWrapper)}>
      {iconLeft ? (
        <UiIcon
          icon={iconLeft}
          size={20}
          classNameIcon={classNamesUtil(styles.icon, styles.iconLeft)}
          isDisabled={val === SwitchStatusEnum.ON || isDisabled}
          onClick={leftClick}
        />
      ) : null}
      {iconRight ? (
        <UiIcon
          icon={iconRight}
          size={20}
          classNameIcon={classNamesUtil(styles.icon, styles.iconRight)}
          isDisabled={val === SwitchStatusEnum.OFF || isDisabled}
          onClick={rightClick}
        />
      ) : null}
      <UiElementLayout className={classNamesUtil(styles.iconCircle, getCircleThemeStyle)} />
    </UiElementLayout>
  );
};

export default memo(Switch);
