import { createElement, memo, PropsWithChildren, ReactElement } from 'react';

import { ElementLayoutTypeEnum } from './element.layout.enum';
import { ElementLayoutProps } from './element.layout.interface';

const ElementLayout = ({
  layoutType = ElementLayoutTypeEnum.DIV,
  className = '',
  children = null,
  onClick,
}: PropsWithChildren<ElementLayoutProps>): ReactElement => {
  return createElement(layoutType, { className, onClick }, children);
};

export default memo(ElementLayout);
