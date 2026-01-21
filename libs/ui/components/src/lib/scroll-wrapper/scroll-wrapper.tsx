import { PropsWithChildren, ReactElement } from 'react';

import { Box } from '@pokemon-pet-shop/ui-primitives';

interface ScrollWrapperProps {
  className?: string;
}

export const ScrollWrapper = ({
  className = '',
  children,
}: PropsWithChildren<ScrollWrapperProps>): ReactElement => {
  return <Box className={`h-full overflow-x-scroll ${className}`}>{children}</Box>;
};
