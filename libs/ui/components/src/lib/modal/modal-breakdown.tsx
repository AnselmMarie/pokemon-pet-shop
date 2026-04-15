import { PropsWithChildren } from 'react';

import { Box, Typography } from '@pokemon-pet-shop/ui-primitives';

import { Icon } from '../icon';

export const ModalCard = ({
  className = '',
  children,
}: PropsWithChildren<{ className?: string }>) => (
  <Box className={`w-full bg-white rounded-lg shadow-lg ${className}`}>{children}</Box>
);

export const ModalClose = ({ onClick }: { onClick: () => void }) => (
  <Icon
    icon="IconX"
    size={24}
    color="blue"
    classNameWrapper="rounded-circle bg-white p-sm"
    displayWrapper
    onClick={onClick}
  />
);

export const ModalTitle = ({ title }: { title: string }) => (
  <Typography variant="h1" className="font-bold text-xl">
    {title}
  </Typography>
);

export const ModalHeader = ({ title }: { title: string }) => (
  <h1 className="font-bold text-xl">{title}</h1>
);

export const ModalBody = ({ children }: PropsWithChildren) => (
  <Box as="section" className="flex flex-col h-full">
    {children}
  </Box>
);

export const ModalActions = ({ children }: PropsWithChildren) => (
  <Box as="footer"> {children} </Box>
);
