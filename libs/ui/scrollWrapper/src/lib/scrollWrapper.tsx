import { PropsWithChildren, ReactElement } from 'react';

import { Box } from '@ui/box';

export const ScrollWrapper = ({
  children,
}: PropsWithChildren): ReactElement => {
  return <Box className="h-full overflow-x-scroll">{children}</Box>;
};
