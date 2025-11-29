import { ReactElement } from 'react';

import { SwitchTheme } from '@features/switchTheme';

import { Modal } from '@ui/modal';
import { Box } from '@ui/box';

/* .innerModal {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(100% - 65px);
} */

// .navWrapper {
//   display: flex;
//   justify-content: space-between;
//   flex: 1;
//   flex-direction: column;
//   margin: 0 var(--theme-spacing-15) var(--theme-spacing-15);
// }

// .switchWrapper {
//   display: flex;
//   justify-content: center;
// }
//  className={newStyles.linkWrapper}
export const NavMobileModal = ({ isOpen, onCloseModal }: any): ReactElement => {
  return (
    <Modal isOpen={isOpen} onClick={onCloseModal}>
      <Box className="w-full flex flex-col h-[calc(100%_-_500px)] relative">
        <Box className="flex flex-1 flex-col justify-between mt-0 mr-md mb-md">
          <Box>
            <Box>PETS</Box>
          </Box>

          <Box className="flex justify-center">
            <SwitchTheme />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
