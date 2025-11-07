import { createElement, PropsWithChildren } from 'react';

import { ElementLayoutProps } from './box.interface';

export const Box = ({
  layoutType = 'div',
  className = '',
  children = null,
  onClick = undefined,
}: PropsWithChildren<ElementLayoutProps>) => {
  return createElement(layoutType, { className, onClick }, children);
};
