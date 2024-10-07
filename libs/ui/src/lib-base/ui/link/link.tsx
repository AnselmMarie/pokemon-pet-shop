import { PropsWithChildren, ReactElement } from 'react';

import { UiElementLayout } from '../element.layout';

import { LinkProps } from './link.interface';
import { openLinkUtil } from './open.link.util';

const Link = ({
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
    <UiElementLayout className={className} onClick={goToLink}>
      {children}
    </UiElementLayout>
  );
};

export default Link;
