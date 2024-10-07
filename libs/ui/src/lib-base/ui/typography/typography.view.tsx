import { createElement, memo, PropsWithChildren, ReactElement } from 'react';

import { TypographyTypeEnum } from './typography.enum';
import { TypographyProps } from './typography.interface';

const Typography = ({
  typographyType = TypographyTypeEnum.P,
  className = '',
  onClick,
  children = null,
}: PropsWithChildren<TypographyProps>): ReactElement => {
  return createElement(typographyType, { className, onClick }, children);
};

export default memo(Typography);
