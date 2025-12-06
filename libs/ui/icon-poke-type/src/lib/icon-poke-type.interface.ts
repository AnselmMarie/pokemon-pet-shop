import { IconPokeListType } from './icon-poke-type.type';

export interface IconPokeTypeProps {
  type: IconPokeListType;
  size: number | string;
  className?: string;
  isLoading?: boolean;
}
