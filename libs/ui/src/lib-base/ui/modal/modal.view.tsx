import { memo, PropsWithChildren, ReactElement } from 'react';

import { classNamesUtil } from '@pokemon-pet-shop/utils';

import { UiCard } from '../card';
import { UiElementLayout } from '../element.layout';

import { ModalAlignmentEnum } from './modal.enum';
import { ModalProps } from './modal.interface';
import styles from './modal.module.css';

const Modal = ({
  classNameShadow = '',
  classNameModal = '',
  isModalShown = false,
  modalAlignment = ModalAlignmentEnum.CENTER,
  children = null,
}: PropsWithChildren<ModalProps>): ReactElement | null => {
  if (!isModalShown) return null;
  return (
    <UiElementLayout
      className={classNamesUtil(classNameShadow, styles.dropShadow, styles[modalAlignment])}
    >
      <UiCard className={classNamesUtil(classNameModal, styles.modal)}>{children}</UiCard>
    </UiElementLayout>
  );
};

export default memo(Modal);
