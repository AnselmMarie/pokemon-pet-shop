import { InputTypeEnum } from './input.enum';

export interface InputProps {
  name?: string;
  type?: InputTypeEnum;
  control?: unknown;
  value?: string | number;
  iconClassname?: string;
  appendIcon?: any;
  defaultValue?: string | number;
  onChange?: () => void;
}
