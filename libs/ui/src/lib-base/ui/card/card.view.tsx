import { memo, PropsWithChildren, ReactElement } from 'react';

import { classNamesUtil } from '@pokemon-pet-shop/utils';

import { UiElementLayout } from '../element.layout';

import { CardProps } from './card.interface';
import styles from './card.module.css';

const Modal = ({ className = '', children = null }: PropsWithChildren<CardProps>): ReactElement => {
  return (
    <UiElementLayout className={classNamesUtil(className, styles.card)}>{children}</UiElementLayout>
  );
};

export default memo(Modal);
