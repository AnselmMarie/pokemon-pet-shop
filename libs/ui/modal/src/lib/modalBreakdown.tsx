import { PropsWithChildren } from 'react';

import { Box } from '@ui/box';

export const ModalCard = ({
  classNameCard,
  children,
}: PropsWithChildren<{ classNameCard?: string }>) => (
  <Box className={`bg-white rounded-lg shadow-lg ${classNameCard}`}>
    {children}
  </Box>
);

export const ModalClose = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick}>X</button>
);

export const ModalTitle = ({ title }: { title: string }) => <h1> {title} </h1>;

export const ModalBody = ({ children }: PropsWithChildren) => (
  <Box as="section"> {children} </Box>
);

export const ModalActions = ({ children }: PropsWithChildren) => (
  <Box as="footer"> {children} </Box>
);
