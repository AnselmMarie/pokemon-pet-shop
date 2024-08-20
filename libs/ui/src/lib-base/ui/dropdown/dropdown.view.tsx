import { memo, PropsWithChildren, ReactElement } from 'react';

import classNames from 'classnames';

import { UiCard } from '../card';

import { ModalProps } from './dropdown.interface';
import styles from './dropdown.module.css';

const Dropdown = ({
  className = '',
  children = null,
}: PropsWithChildren<ModalProps>): ReactElement => {
  return <UiCard className={classNames(className, styles.dropdown)}>{children}</UiCard>;
};

export default memo(Dropdown);
