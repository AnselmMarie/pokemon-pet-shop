import { createElement, PropsWithChildren, ReactElement } from 'react';

import { TypographyProps } from './typography.interface';

export const Typography = ({
  variant = 'p',
  className = '',
  onClick,
  children = null,
}: PropsWithChildren<TypographyProps>): ReactElement => {
  return createElement(variant, { className, onClick }, children);
};
