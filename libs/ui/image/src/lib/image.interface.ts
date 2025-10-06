import { MobSrcType } from './image.type';

export interface ImageProps {
  src: string;
  alt?: string;
  className?: any;
  isLoading?: boolean;
  mobSrcType?: MobSrcType;
}
