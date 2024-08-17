import { memo, PropsWithChildren, ReactElement } from 'react';

import classNames from 'classnames';

import { ElementLayoutTypeEnum, UiElementLayout } from '../element.layout';

import { ElementLayoutProps } from './container.layout.interface';
import styles from './container.layout.module.css';

const ContainerLayout = ({
  className = '',
  children = null,
}: PropsWithChildren<ElementLayoutProps>): ReactElement => {
  return (
    <UiElementLayout
      layoutType={ElementLayoutTypeEnum.DIV}
      className={classNames(className, styles.container)}
    >
      {children}
    </UiElementLayout>
  );
};

export default memo(ContainerLayout);
