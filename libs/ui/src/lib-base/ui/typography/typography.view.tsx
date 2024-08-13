import { createElement, memo, PropsWithChildren, ReactElement } from 'react';

import { TypographyTypeEnum } from './typography.enum';
import { TypographyProps } from './typography.interface';

const Typography = ({
  typographyType = TypographyTypeEnum.P,
  className = '',
  children = null,
}: PropsWithChildren<TypographyProps>): ReactElement => {
  return createElement(typographyType, { className }, children);
};

export default memo(Typography);
