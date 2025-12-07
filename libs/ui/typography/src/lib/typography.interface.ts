import { TypographyVariant } from './typography.type';

export interface TypographyProps {
  variant?: TypographyVariant;
  className?: string;
  onClick?: () => void;
}
