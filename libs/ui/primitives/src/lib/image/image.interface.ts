import { ImageContentFitLiteral } from './image.type';

export interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  fallbackClassName?: string;
  iconSize?: number;
  width?: number;
  height?: number;
  isLoading?: boolean;
  contentFit?: ImageContentFitLiteral;
  isCircle?: boolean;
}
