import { memo, PropsWithChildren, ReactElement } from 'react';

import { Modal, SafeAreaView } from 'react-native';

import { UiScrollWrapper } from '../scroll.wrapper';

import { ModalElementProps } from './modal.interface';

const ModalElement = ({ isOpen, children }: PropsWithChildren<ModalElementProps>): ReactElement => {
  return (
    <Modal animationType="slide" visible={isOpen}>
      <SafeAreaView>
        <UiScrollWrapper>{children}</UiScrollWrapper>
      </SafeAreaView>
    </Modal>
  );
};

export default memo(ModalElement);
