import { PropsWithChildren, ReactElement } from 'react';

import { Box } from '@ui/box';

import { ContainerProps } from './container.interface';

export const Container = ({
  className = '',
  children = null,
}: PropsWithChildren<ContainerProps>): ReactElement => {
  return <Box className={`mx-auto ${className}`}>{children}</Box>;
};
