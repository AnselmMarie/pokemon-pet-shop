import { PropsWithChildren, ReactElement } from 'react';

import { Box } from '@pokemon-pet-shop/ui-box';

import { CardProps } from './card.interface';

export const Card = ({ className = '', children }: PropsWithChildren<CardProps>): ReactElement => {
  return <Box className={`rounded-sm ${className}`}>{children}</Box>;
};
