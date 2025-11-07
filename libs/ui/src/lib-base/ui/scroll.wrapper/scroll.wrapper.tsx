import { PropsWithChildren, ReactElement } from 'react';

import { UiElementLayout } from '../element.layout';

import { styles } from './scroll.wrapper.module';

const ScrollWrapper = ({ children }: PropsWithChildren): ReactElement => {
  return <UiElementLayout className={styles.scroll}>{children}</UiElementLayout>;
};

export default ScrollWrapper;
