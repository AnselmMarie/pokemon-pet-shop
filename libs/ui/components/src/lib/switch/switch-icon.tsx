import { ReactElement } from 'react';

import { Icon } from '../icon';

import { SwitchIconProps } from './switch.interface';

export const SwitchIcon = ({ icon, color, isDisabled, onClick }: SwitchIconProps): ReactElement => (
  <Icon
    icon={icon}
    size={20}
    color={color}
    classNameIcon="z-10 cursor-pointer"
    classNameWrapper="flex justify-center items-center w-[100%] h-[39px] p-[2px] z-10"
    isDisabled={isDisabled}
    displayWrapper
    onClick={onClick}
  />
);
