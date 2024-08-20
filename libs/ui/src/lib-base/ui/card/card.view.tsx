import { memo, PropsWithChildren, ReactElement } from 'react';

import classNames from 'classnames';

import { UiElementLayout } from '../element.layout';

import { CardProps } from './card.interface';
import styles from './card.module.css';

const Modal = ({ className = '', children = null }: PropsWithChildren<CardProps>): ReactElement => {
  return (
    <UiElementLayout className={classNames(className, styles.card)}>{children}</UiElementLayout>
  );
};

export default memo(Modal);
