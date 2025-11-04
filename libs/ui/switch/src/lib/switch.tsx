import { ReactElement } from 'react';

// import { useRenderStyles } from '@pokemon-pet-shop/hooks';
// import { classNamesUtil, noopUtil } from '@pokemon-pet-shop/utils';

import { Box } from '@ui/box';
import { Icon } from '@ui/icon';

import { SwitchProps } from './switch.interface';
// import { styles } from './switch.module';
import useSwitchLogic from './use.switch.logic';

export const Switch = ({
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

  console.log('getCircleThemeStyle', getCircleThemeStyle);

  // background: var(--theme-netural-200-mode);
  // padding: var(--theme-spacing-5) var(--theme-spacing-10);
  // justify-content: space-between;`
  // box - shadow: inset 0 3px 3px rgb(0 0 0 / 10 %);

  return (
    <Box
      className={`flex w-[72px] h-[42px] items-center justify-center relative rounded-pill ${className}`}
    >
      {iconLeft ? (
        <Icon
          icon={iconLeft}
          size={20}
          // classNameIcon={classNamesUtil(newStyles.icon, newStyles.iconLeft)}
          // classNameWrapper={newStyles.iconWrapper}
          classNameIcon="z-10 cursor-pointer border-lightGrey"
          classNameWrapper="flex justify-center items-center w-[31px] h-[39px] p-[2px]"
          isDisabled={val === 'ON' || isDisabled}
          displayWrapper
          onClick={onInitLeftClick}
        />
      ) : null}
      {/* width: 31px;
      height: 39px; padding: 2px; */}

      {iconRight ? (
        <Icon
          icon={iconRight}
          size={20}
          // classNameIcon={classNamesUtil(newStyles.icon, newStyles.iconRight)}
          // classNameWrapper={newStyles.iconWrapper}
          classNameIcon="z-10 cursor-pointer"
          classNameWrapper="flex justify-center items-center w-[31px] h-[39px] p-[2px]"
          isDisabled={val === 'OFF' || isDisabled}
          displayWrapper
          onClick={onInitRightClick}
        />
      ) : null}
      {/*  background-color:
      var(--theme-blue-600-mode);  border-radius:
      var(--theme-radius-circle); transition: left 100ms ease-in-out; */}
      <Box
        className={`absolute top-[1px] h-[36px] w-[36px] bg-lightBlue z-10 shadow transition-all duration-300 ease-in-out rounded-circle ${getCircleThemeStyle}`}
        // className={classNamesUtil(newStyles.iconCircle, getCircleThemeStyle)}
      />
    </Box>
  );
};
