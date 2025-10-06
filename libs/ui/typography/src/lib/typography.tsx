import { createElement, PropsWithChildren, ReactElement } from 'react';

import { TypographyProps } from './typography.interface';

export const Typography = ({
  typographyType = 'p',
  className = '',
  onClick,
  children = null,
}: PropsWithChildren<TypographyProps>): ReactElement => {
  return createElement(typographyType, { className, onClick }, children);
};
