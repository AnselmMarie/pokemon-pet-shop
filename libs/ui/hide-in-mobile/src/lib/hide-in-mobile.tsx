import { PropsWithChildren, ReactNode } from 'react';

export const HideInMobile = ({
  children = null,
}: PropsWithChildren): ReactNode => {
  return children;
};
