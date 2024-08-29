import { memo, PropsWithChildren, ReactNode } from 'react';

const HideInMobile = ({ children = null }: PropsWithChildren): ReactNode => {
  return children;
};

export default memo(HideInMobile);
