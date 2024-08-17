import { GenericNonReturnType } from '@pokemon-pet-shop/typing';

import { ElementLayoutTypeEnum } from './container.layout.enum';

export interface ElementLayoutProps {
  layoutType?: ElementLayoutTypeEnum;
  className?: any;
  onClick?: GenericNonReturnType;
}
