import { memo, PropsWithChildren, ReactElement } from 'react';

import classNames from 'classnames';

import { UiCard } from '../card';
import { UiElementLayout } from '../element.layout';

import { ModalProps } from './modal.interface';
import styles from './modal.module.css';

const Modal = ({
  className = '',
  children = null,
}: PropsWithChildren<ModalProps>): ReactElement => {
  return (
    <UiElementLayout className={classNames(className, styles.dropShadow)}>
      <UiCard className={classNames(className, styles.modal)}>{children}</UiCard>
    </UiElementLayout>
  );
};

export default memo(Modal);
