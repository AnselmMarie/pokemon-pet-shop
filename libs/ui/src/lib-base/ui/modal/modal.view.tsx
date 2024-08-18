import { memo, PropsWithChildren, ReactElement } from 'react';

import classNames from 'classnames';

import { ElementLayoutTypeEnum, UiElementLayout } from '../element.layout';

import { ElementLayoutProps } from './modal.interface';
import styles from './modal.module.css';

const Modal = ({
  className = '',
  children = null,
}: PropsWithChildren<ElementLayoutProps>): ReactElement => {
  return (
    <UiElementLayout
      layoutType={ElementLayoutTypeEnum.DIV}
      className={classNames(className, styles.dropShadow)}
    >
      <UiElementLayout
        layoutType={ElementLayoutTypeEnum.DIV}
        className={classNames(className, styles.modal)}
      >
        {children}
      </UiElementLayout>
    </UiElementLayout>
  );
};

export default memo(Modal);
