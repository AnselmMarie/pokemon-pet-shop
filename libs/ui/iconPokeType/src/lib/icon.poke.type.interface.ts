import { IconPokeListType } from './iconPokeType.type';

export interface IconPokeTypeProps {
  type: IconPokeListType;
  size: number | string;
  className?: string;
  isLoading?: boolean;
}
