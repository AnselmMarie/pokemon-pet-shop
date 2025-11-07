import { useEffect, useMemo, useState } from 'react';

import { GenericNonReturnType } from '@pokemon-pet-shop/typing';

import { SwitchStatusEnum } from './switch.enum';

interface UseSwitchLogicReturn {
  onInitLeftClick: GenericNonReturnType;
  onInitRightClick: GenericNonReturnType;
  onGetCircleThemeStyle: any;
}

const useSwitchLogic = (
  defaultValue: SwitchStatusEnum,
  val: SwitchStatusEnum | null,
  newStyles: any,
  onLeftClick: GenericNonReturnType,
  onRightClick: GenericNonReturnType
): UseSwitchLogicReturn => {
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
      return newStyles.circleLightPosition;
    }
    return newStyles.circleDarkPosition;
  }, [switchState, newStyles]);

  useEffect(() => {
    if (val) {
      setSwitch(val);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [val]);

  return {
    onInitLeftClick: leftClick,
    onInitRightClick: rightClick,
    onGetCircleThemeStyle: getCircleThemeStyle,
  };
};

export default useSwitchLogic;
