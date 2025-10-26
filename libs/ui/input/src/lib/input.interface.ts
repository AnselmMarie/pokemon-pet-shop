// import { GenericNonReturnType } from '@pokemon-pet-shop/typing';

// import { IconTypeEnum } from '../icon/icon.enum';

import { InputTypeEnum } from './input.enum';

export interface InputProps {
  name?: string;
  type?: InputTypeEnum;
  control?: any;
  value?: any;
  iconClassname?: any;
  appendIcon?: any | null;
  defaultValue?: any;
  onChange?: () => void;
}
