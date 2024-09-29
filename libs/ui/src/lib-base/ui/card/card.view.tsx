import { memo, PropsWithChildren, ReactElement } from 'react';

import { classNamesUtil } from '@pokemon-pet-shop/utils';

import { UiElementLayout } from '../element.layout';

import { CardProps } from './card.interface';
import { styles } from './card.module';

const Card = ({
  className = '',
  isLoading = false,
  children = null,
}: PropsWithChildren<CardProps>): ReactElement => {
  const cardStyle = isLoading ? styles.cardLoading : styles.card;
  return (
    <UiElementLayout className={classNamesUtil(className, cardStyle)}>{children}</UiElementLayout>
  );
};

export default memo(Card);
