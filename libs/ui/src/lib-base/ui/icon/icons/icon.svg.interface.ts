import { GenericNonReturnType } from '@pokemon-pet-shop/typing';

export interface IconSvgProps {
  size?: string;
  fill?: string;
  stroke?: string;
  onClick?: GenericNonReturnType;
}

export interface IconImageProps {
  className?: string;
  onClick?: GenericNonReturnType;
}
