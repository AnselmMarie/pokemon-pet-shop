import { PropsWithChildren, useEffect, useState } from 'react';

import { Box } from '@ui/box';
import { ModalBody, ModalCard, ModalClose, ModalTitle } from './modalBreakdown';

export const Modal = ({
  title = 'Modal Title',
  isOpen = false,
  children,
  onClick,
}: PropsWithChildren<{
  onClick: () => void;
  isOpen?: boolean;
  title?: string;
}>) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsVisible(true);
      setTimeout(() => {
        setStartAnimation(true);
      }, 10);
      return;
    }

    setStartAnimation(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <Box
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
        startAnimation
          ? 'ease-in duration-300 opacity-100'
          : 'ease-out duration-300 opacity-0'
      }`}
    >
      <ModalCard>
        <ModalClose onClick={onClick} />
        <ModalTitle title={title} />
        <ModalBody>{children}</ModalBody>
      </ModalCard>
    </Box>
  );
};
