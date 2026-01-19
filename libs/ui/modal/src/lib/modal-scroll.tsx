import { PropsWithChildren, ReactElement } from 'react';

import { Box } from '@pokemon-pet-shop/ui-box';

export const ModalScroll = ({ children }: PropsWithChildren): ReactElement => {
  return <Box className={`p-sm overflow-x-scroll flex-1`}>{children}</Box>;
};
