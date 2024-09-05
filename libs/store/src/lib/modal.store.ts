import { ReactElement } from 'react';

import { noopUtil } from '@pokemon-pet-shop/utils';
import { create } from 'zustand';

export enum ModalHeadlineTypeEnum {
  ABSOLUTE = 'absolute',
  RELATIVE = 'relative',
}

interface ModalOptions {
  classNameShadow?: string;
  classNameModal?: string;
  isModalShown?: boolean;
  title?: string;
  data?: any;
  headlineType?: ModalHeadlineTypeEnum;
  modalAlignment?: any;
}

interface setModalStoreProps {
  content: ReactElement;
  options?: ModalOptions;
  onCallback?: any;
}

const modalStore = (set: any) => ({
  isOpen: false,
  modalContent: null,
  modalOptions: {
    classNameShadow: '',
    classNameModal: '',
    isModalShown: false,
    title: '',
    data: null,
    headlineType: ModalHeadlineTypeEnum.RELATIVE,
    modalAlignment: 'center',
  },
  onCallback: null,
  changeTitle: (title: string) => {
    set({ title });
  },
  openModal: ({
    options,
    content,
    onCallback = () => {
      noopUtil();
    },
  }: setModalStoreProps) => {
    set({ isOpen: true, modalOptions: options, modalContent: content, onCallback });
  },
  closeModal: () => {
    set({ isOpen: false, modalContent: null });
  },
});

export const useModalStore = create(modalStore);
