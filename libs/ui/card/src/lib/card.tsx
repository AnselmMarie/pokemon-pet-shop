import { PropsWithChildren, ReactElement } from 'react';

import { Box } from '@ui/box';

import { CardProps } from './card.interface';

export const Card = ({ className = '', children }: PropsWithChildren<CardProps>): ReactElement => {
  return <Box className={`rounded-sm ${className}`}>{children}</Box>;
};
