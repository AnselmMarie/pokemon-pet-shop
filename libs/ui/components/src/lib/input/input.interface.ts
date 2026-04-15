import { IconType } from '../icon';

import { InputTypeEnum } from './input.enum';

export interface InputProps {
  name?: string;
  type?: InputTypeEnum;
  control?: unknown;
  value?: string | number;
  iconClassname?: string;
  appendIcon?: IconType;
  defaultValue?: string | number;
  onChange?: () => void;
}
