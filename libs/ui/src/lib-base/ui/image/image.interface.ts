import { mobSrcTypeEnum } from './image.enum';

export interface ImageProps {
  src: string;
  alt?: string;
  width?: string;
  className?: any;
  mobSrcType?: mobSrcTypeEnum;
}
