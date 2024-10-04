import { memo, PropsWithChildren, ReactElement } from 'react';

import { useRenderStyles } from '@pokemon-pet-shop/hooks';
import { Modal, SafeAreaView } from 'react-native';

import { UiScrollWrapper } from '../scroll.wrapper';

import { ModalElementProps } from './modal.interface';
import { styles } from './modal.module.native';

const ModalElement = ({ isOpen, children }: PropsWithChildren<ModalElementProps>): ReactElement => {
  const { newStyles } = useRenderStyles(styles);

  return (
    <Modal animationType="slide" visible={isOpen}>
      <SafeAreaView style={newStyles.safeArea}>
        <UiScrollWrapper>{children}</UiScrollWrapper>
      </SafeAreaView>
    </Modal>
  );
};

export default memo(ModalElement);
