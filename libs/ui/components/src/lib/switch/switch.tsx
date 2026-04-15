import { ReactElement, useEffect, useMemo, useState } from 'react';

import { Box } from '@pokemon-pet-shop/ui-primitives';

import { SwitchIcon } from './switch-icon';
import { SwitchProps } from './switch.interface';
import { SwitchStatus } from './switch.type';

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
  const [switchState, setSwitchState] = useState<SwitchStatus>(defaultValue);

  const handleLeftClick = () => {
    setSwitchState('ON');
    onLeftClick();
  };

  const handleRightClick = () => {
    setSwitchState('OFF');
    onRightClick();
  };

  const circlePositionStyle = useMemo(() => {
    return switchState === 'ON' ? 'left-[10px]' : 'left-[60px]';
  }, [switchState]);

  useEffect(() => {
    if (val) {
      setSwitchState(val);
    }
  }, [val]);

  return (
    <Box
      className={`flex flex-row bg-lightGrey pl-2xs pr-2xs w-[109px] h-[61px] items-center justify-between relative rounded-pill ${className}`}
    >
      {iconLeft ? (
        <SwitchIcon
          icon={iconLeft}
          color={val === 'ON' ? 'white' : 'blue'}
          isDisabled={val === 'ON' || isDisabled}
          onClick={handleLeftClick}
        />
      ) : null}

      {iconRight ? (
        <SwitchIcon
          icon={iconRight}
          color={val === 'ON' ? 'blue' : 'white'}
          isDisabled={val === 'OFF' || isDisabled}
          onClick={handleRightClick}
        />
      ) : null}

      <Box
        className={`absolute top-[11px] h-[38px] w-[38px] bg-primary z-0 shadow transition-all duration-300 ease-in-out rounded-circle ${circlePositionStyle}`}
      />
    </Box>
  );
};
