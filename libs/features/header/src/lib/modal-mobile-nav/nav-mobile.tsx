import { ReactElement } from 'react';

import { SwitchTheme } from '@features/switch-theme';

import { Modal } from '@ui/modal';
import { Box } from '@ui/box';

interface NavMobileModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

export const NavMobileModal = ({
  isOpen,
  onCloseModal,
}: NavMobileModalProps): ReactElement => {
  return (
    <Modal
      isOpen={isOpen}
      title="Menu"
      headlineType="relative"
      modalAlignment="left"
      onClick={onCloseModal}
    >
      <Box className="w-full flex flex-col h-full relative">
        <Box className="flex flex-1 flex-col justify-between mt-0 mr-md mb-md">
          <Box>{/* <Box>PETS</Box> */}</Box>

          <Box className="flex justify-center">
            <SwitchTheme />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
