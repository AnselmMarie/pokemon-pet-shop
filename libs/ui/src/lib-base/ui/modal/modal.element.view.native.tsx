import { memo, PropsWithChildren, ReactElement } from 'react';

import { Modal, SafeAreaView } from 'react-native';

import { ModalElementProps } from './modal.interface';

const ModalElement = ({
  className,
  isOpen,
  children,
}: PropsWithChildren<ModalElementProps>): ReactElement => {
  return (
    <Modal animationType="slide" visible={isOpen}>
      <SafeAreaView style={className}>{children}</SafeAreaView>
    </Modal>
  );
};

export default memo(ModalElement);
