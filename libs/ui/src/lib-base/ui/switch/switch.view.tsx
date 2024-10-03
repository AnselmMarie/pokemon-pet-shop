import { memo, ReactElement } from 'react';

import { useRenderStyles } from '@pokemon-pet-shop/hooks';
import { classNamesUtil, noopUtil } from '@pokemon-pet-shop/utils';

import { THEME_BLUE_400, THEME_NETURAL_100 } from '../../styles/ts/variables';
import { UiElementLayout } from '../element.layout';
import { UiIcon } from '../icon';

import { SwitchStatusEnum } from './switch.enum';
import { SwitchProps } from './switch.interface';
import { styles } from './switch.module';
import useSwitchLogic from './use.switch.logic';

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
  const { newStyles } = useRenderStyles(styles);
  const { onInitLeftClick, onInitRightClick, onGetCircleThemeStyle } = useSwitchLogic(
    defaultValue,
    val,
    newStyles,
    onLeftClick,
    onRightClick
  );

  return (
    <UiElementLayout className={classNamesUtil(className, newStyles.switchWrapper)}>
      {iconLeft ? (
        <UiIcon
          icon={iconLeft}
          size={20}
          classNameIcon={classNamesUtil(newStyles.icon, newStyles.iconLeft)}
          classNameWrapper={newStyles.iconWrapper}
          isDisabled={val === SwitchStatusEnum.ON || isDisabled}
          displayWrapper
          onClick={onInitLeftClick}
        />
      ) : null}
      {iconRight ? (
        <UiIcon
          icon={iconRight}
          size={20}
          classNameIcon={classNamesUtil(newStyles.icon, newStyles.iconRight)}
          classNameWrapper={newStyles.iconWrapper}
          isDisabled={val === SwitchStatusEnum.OFF || isDisabled}
          displayWrapper
          onClick={onInitRightClick}
        />
      ) : null}
      <UiElementLayout className={classNamesUtil(newStyles.iconCircle, onGetCircleThemeStyle)} />
    </UiElementLayout>
  );
};

export default memo(Switch);
