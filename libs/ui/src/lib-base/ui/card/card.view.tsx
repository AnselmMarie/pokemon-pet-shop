import { memo, PropsWithChildren, ReactElement } from 'react';

import { UiElementLayout } from '../element.layout';

import { CardProps } from './card.interface';

const Card = ({ className = '', children = null }: PropsWithChildren<CardProps>): ReactElement => {
  return <UiElementLayout className={className}>{children}</UiElementLayout>;
};

export default memo(Card);
