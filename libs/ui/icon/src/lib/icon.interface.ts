// import { IconTypeEnum } from './icon.type';

import { IconType } from './icon.type';

// export type IconType = IconTypeEnum | null;

export interface IconProps {
  icon?: IconType;
  size?: number;
  fill?: string;
  stroke?: string;
  classNameWrapper?: any;
  classNameIcon?: any;
  displayWrapper?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}
