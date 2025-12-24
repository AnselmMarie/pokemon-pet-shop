import { ReactElement } from 'react';

import { Box } from '@pokemon-pet-shop/ui-box';
import { Icon } from '@pokemon-pet-shop/ui-icon';

import { SwitchProps } from './switch.interface';
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
  const { getCircleThemeStyle, onInitLeftClick, onInitRightClick } = useSwitchLogic(
    defaultValue,
    val,
    onLeftClick,
    onRightClick
  );

  return (
    <Box
      className={`flex flex-row bg-lightGrey pl-2xs pr-2xs w-[109px] h-[61px] items-center justify-between relative rounded-pill ${className}`}
    >
      {iconLeft ? (
        <Icon
          icon={iconLeft}
          size={20}
          stroke={val === 'ON' ? 'white' : 'blue'}
          fill={val === 'ON' ? 'lightGrey' : 'none'}
          classNameIcon="z-10 cursor-pointer border-lightGrey"
          classNameWrapper="flex justify-center items-center w-[100%] h-[39px] p-[2px] z-10"
          isDisabled={val === 'ON' || isDisabled}
          displayWrapper
          onClick={onInitLeftClick}
        />
      ) : null}

      {iconRight ? (
        <Icon
          icon={iconRight}
          size={20}
          stroke={val === 'ON' ? 'blue' : 'white'}
          fill={val === 'ON' ? 'none' : 'lightGrey'}
          classNameIcon="z-10 cursor-pointer"
          classNameWrapper="flex justify-center items-center w-[100%] h-[39px] p-[2px] z-10"
          isDisabled={val === 'OFF' || isDisabled}
          displayWrapper
          onClick={onInitRightClick}
        />
      ) : null}
      <Box
        className={`absolute top-[11px] h-[38px] w-[38px] bg-primary z-0 shadow transition-all duration-300 ease-in-out rounded-circle ${getCircleThemeStyle}`}
      />
    </Box>
  );
};
