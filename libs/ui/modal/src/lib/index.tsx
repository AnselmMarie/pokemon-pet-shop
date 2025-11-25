import { PropsWithChildren, useEffect, useMemo, useState } from 'react';

import { Box } from '@ui/box';

import { ModalBody, ModalCard, ModalClose, ModalTitle } from './modalBreakdown';
import { ModalScroll } from './modalScroll';

export const Modal = ({
  title = '',
  isOpen = false,
  headlineType = 'absolute',
  modalAlignment = 'center',
  children,
  onClick,
}: PropsWithChildren<{
  title?: string;
  isOpen?: boolean;
  modalAlignment?: 'center' | 'left' | 'right';
  headlineType?: 'absolute' | 'relative';
  onClick: () => void;
}>) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [startAnimation, setStartAnimation] = useState(false);

  const getHeadlineClasses = useMemo((): string => {
    switch (headlineType) {
      case 'relative':
        return 'flex relative w-full items-center justify-between p-md';
      case 'absolute':
      default:
        return 'flex absolute top-0 left-0 w-full items-center justify-between p-md z-10';
    }
  }, [headlineType]);

  const getModalAlignmentClasses = useMemo((): string => {
    switch (modalAlignment) {
      case 'left':
        return 'justify-start';
      case 'right':
        return 'justify-end';
      case 'center':
      default:
        return 'justify-center';
    }
  }, [modalAlignment]);

  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <Box className="fixed top-[0px] left-[0px] z-50 w-full h-full bg-[#000000] bg-opacity-50">
      <Box
        className={`inset-0 z-50 flex items-center ${getModalAlignmentClasses} ${
          startAnimation
            ? 'ease-in duration-300 opacity-100'
            : 'ease-out duration-300 opacity-0'
        }`}
      >
        <ModalCard>
          <Box className={getHeadlineClasses}>
            {title && <ModalTitle title={title} />}
            <ModalClose onClick={onClick} />
          </Box>
          <ModalBody>
            <ModalScroll>{children}</ModalScroll>
          </ModalBody>
        </ModalCard>
      </Box>
    </Box>
  );
};
