import { PropsWithChildren } from 'react';

import { Box } from '@ui/box';
import { Icon } from '@ui/icon';

export const ModalCard = ({
  classNameCard = '',
  children,
}: PropsWithChildren<{ classNameCard?: string }>) => (
  <Box className={`w-full bg-white rounded-lg shadow-lg ${classNameCard}`}>
    {children}
  </Box>
);

export const ModalClose = ({ onClick }: { onClick: () => void }) => (
  <Icon icon="IconX" size={24} onClick={onClick} />
);

export const ModalTitle = ({ title }: { title: string }) => <h1> {title} </h1>;

export const ModalBody = ({ children }: PropsWithChildren) => (
  <Box as="section"> {children} </Box>
);

export const ModalActions = ({ children }: PropsWithChildren) => (
  <Box as="footer"> {children} </Box>
);
