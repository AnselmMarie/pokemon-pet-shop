// import { GenericNonReturnType } from '@pokemon-pet-shop/typing';

// import { IconTypeEnum } from '../icon/icon.enum';

import { InputTypeEnum } from './input.enum';

export interface InputProps {
  name?: string;
  type?: InputTypeEnum;
  control?: unknown;
  value?: string | number;
  iconClassname?: string;
  appendIcon?: unknown;
  defaultValue?: string | number;
  onChange?: () => void;
}
