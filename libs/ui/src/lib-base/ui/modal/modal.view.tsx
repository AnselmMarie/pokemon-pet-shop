import { memo, ReactElement } from 'react';

import { useModalStore } from '@pokemon-pet-shop/store';
import { classNamesUtil } from '@pokemon-pet-shop/utils';

import { UiCard } from '../card';
import { UiElementLayout } from '../element.layout';
import { IconTypeEnum, UiIcon } from '../icon';
import { UiTypography } from '../typography';

import ModalElement from './modal.element.view';
import { styles } from './modal.module';

const Modal = (): ReactElement | null => {
  const { isOpen, modalOptions, modalContent, closeModal } = useModalStore((state) => state);
  const { classNameShadow, modalAlignment, classNameModal, headlineType, title } = modalOptions;

  if (!isOpen) return null;
  return (
    <ModalElement
      className={classNamesUtil(classNameShadow, styles.dropShadow, styles[modalAlignment])}
      isOpen={isOpen}
    >
      <UiCard className={classNamesUtil(classNameModal, styles.modal)}>
        <>
          <UiElementLayout className={styles[`${headlineType}DropdownHeadline`]}>
            <UiTypography>{title}</UiTypography>
            <UiIcon icon={IconTypeEnum.ICON_X} onClick={closeModal} />
          </UiElementLayout>
          {modalContent ? modalContent : null}
        </>
      </UiCard>
    </ModalElement>
  );
};

export default memo(Modal);
