import { PropsWithChildren, ReactElement } from 'react';

import { Box } from '@ui/box';

export const ModalScroll = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <Box className="p-sm h-[calc(100%_-_60px)] overflow-x-scroll">
      {children}
    </Box>
  );
};
