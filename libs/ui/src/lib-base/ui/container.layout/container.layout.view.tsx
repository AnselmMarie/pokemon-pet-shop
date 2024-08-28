import { memo, PropsWithChildren, ReactElement } from 'react';

import { classNamesUtil } from '@pokemon-pet-shop/utils';

import { UiElementLayout } from '../element.layout';

import { ElementLayoutProps } from './container.layout.interface';
import { styles } from './container.layout.module';

const ContainerLayout = ({
  className = '',
  children = null,
}: PropsWithChildren<ElementLayoutProps>): ReactElement => {
  return (
    <UiElementLayout className={classNamesUtil(className, styles.container)}>
      {children}
    </UiElementLayout>
  );
};

export default memo(ContainerLayout);
