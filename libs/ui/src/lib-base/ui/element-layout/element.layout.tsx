import { createElement, PropsWithChildren, ReactElement } from 'react';

import { ElementLayoutTypeEnum } from './element.layout.enum';
import { ElementLayoutProps } from './element.layout.interface';

const ElementLayout = ({
  layoutType = ElementLayoutTypeEnum.DIV,
  className = '',
  children = null,
}: PropsWithChildren<ElementLayoutProps>): ReactElement => {
  return createElement(layoutType, { className }, children);
};

export default ElementLayout;
