import { memo, PropsWithChildren, ReactElement } from 'react';

import { UiElementLayout } from '../element.layout';

import { ModalElementProps } from './modal.interface';

const ModalElement = ({
  className,
  children,
}: PropsWithChildren<ModalElementProps>): ReactElement => {
  return <UiElementLayout className={className}>{children}</UiElementLayout>;
};

export default memo(ModalElement);
