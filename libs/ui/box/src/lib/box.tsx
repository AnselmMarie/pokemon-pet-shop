import { createElement, PropsWithChildren } from 'react';

import { ElementLayoutProps } from './box.interface';

export const Box = ({
  as = 'div',
  className = '',
  children = null,
  onClick = undefined,
}: PropsWithChildren<ElementLayoutProps>) => {
  return createElement(as, { className, onClick }, children);
};
