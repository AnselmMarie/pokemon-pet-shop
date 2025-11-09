import { useEffect, useMemo, useState } from 'react';

// import { GenericNonReturnType } from '@pokemon-pet-shop/typing';

import { SwitchStatus } from './switch.type';

interface UseSwitchLogicReturn {
  getCircleThemeStyle: string;
  onInitLeftClick: () => void;
  onInitRightClick: () => void;
}

const useSwitchLogic = (
  defaultValue: SwitchStatus,
  val: SwitchStatus | null,
  onLeftClick: () => void,
  onRightClick: () => void
): UseSwitchLogicReturn => {
  const [switchState, setSwitch] = useState(defaultValue);

  const leftClick = () => {
    setSwitch('ON');
    onLeftClick();
  };

  const rightClick = () => {
    setSwitch('OFF');
    onRightClick();
  };

  const getCircleThemeStyle = useMemo(() => {
    if (switchState === 'ON') {
      return 'left-[2px]';
    }
    return 'left-[30px]';
  }, [switchState]);

  useEffect(() => {
    if (val) {
      setSwitch(val);
    }
  }, [val]);

  return {
    getCircleThemeStyle,
    onInitLeftClick: leftClick,
    onInitRightClick: rightClick,
  };
};

export default useSwitchLogic;
