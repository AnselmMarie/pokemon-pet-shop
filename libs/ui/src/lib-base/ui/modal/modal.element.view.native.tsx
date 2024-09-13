import { memo, PropsWithChildren, ReactElement } from 'react';

import { Modal, SafeAreaView } from 'react-native';

import { ModalElementProps } from './modal.interface';

const ModalElement = ({ isOpen, children }: PropsWithChildren<ModalElementProps>): ReactElement => {
  return (
    <Modal animationType="slide" visible={isOpen}>
      <SafeAreaView>{children}</SafeAreaView>
    </Modal>
  );
};

export default memo(ModalElement);
