import { PropsWithChildren, ReactElement } from 'react';

import { Box } from '@ui/box';

import { LinkProps } from './link.interface';
import { openLinkUtil } from './open.link.util';

export const Link = ({
  link = null,
  className = '',
  children,
}: PropsWithChildren<LinkProps>): ReactElement => {
  const goToLink = () => {
    if (link) {
      openLinkUtil(link);
    }
  };

  return (
    <Box className={`cursor-pointer ${className}`} onClick={goToLink}>
      {children}
    </Box>
  );
};
