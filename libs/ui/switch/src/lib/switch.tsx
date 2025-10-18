import { memo, ReactElement } from 'react';

// import { useRenderStyles } from '@pokemon-pet-shop/hooks';
// import { classNamesUtil, noopUtil } from '@pokemon-pet-shop/utils';

import { Box } from '@ui/box';
import { Icon } from '@ui/icon';

import { SwitchProps } from './switch.interface';
// import { styles } from './switch.module';
import useSwitchLogic from './use.switch.logic';

const Switch = ({
  className,
  iconLeft,
  iconRight,
  defaultValue = 'ON',
  isDisabled = false,
  val = null,
  onLeftClick = () => {
    // noopUtil();
  },
  onRightClick = () => {
    // noopUtil();
  },
}: SwitchProps): ReactElement => {
  // const { newStyles } = useRenderStyles(styles);
  const { getCircleThemeStyle, onInitLeftClick, onInitRightClick } =
    useSwitchLogic(defaultValue, val, onLeftClick, onRightClick);

  //   border-radius: var(--theme-radius-pill);
  // background: var(--theme-netural-200-mode);
  // display: flex;
  // min-width: 85px;
  // padding: var(--theme-spacing-5) var(--theme-spacing-10);
  // align-items: center;
  // justify-content: space-between;
  // position: relative;
  // box - shadow: inset 0 3px 3px rgb(0 0 0 / 10 %);

  return (
    <Box className={`'flex relative items-center' ${className}`}>
      {iconLeft ? (
        <Icon
          icon={iconLeft}
          size={20}
          // classNameIcon={classNamesUtil(newStyles.icon, newStyles.iconLeft)}
          // classNameWrapper={newStyles.iconWrapper}
          isDisabled={val === 'ON' || isDisabled}
          displayWrapper
          onClick={onInitLeftClick}
        />
      ) : null}
      {iconRight ? (
        <Icon
          icon={iconRight}
          size={20}
          // classNameIcon={classNamesUtil(newStyles.icon, newStyles.iconRight)}
          // classNameWrapper={newStyles.iconWrapper}
          isDisabled={val === 'OFF' || isDisabled}
          displayWrapper
          onClick={onInitRightClick}
        />
      ) : null}
      <Box
      // className={classNamesUtil(newStyles.iconCircle, getCircleThemeStyle)}
      />
    </Box>
  );
};

export default memo(Switch);
