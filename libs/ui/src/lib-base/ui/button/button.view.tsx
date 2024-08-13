import { memo, PropsWithChildren, ReactElement, useMemo } from 'react';

import classnames from 'classnames';

import { ButtonTypeEnum } from './button.enum';
import { ButtonProps } from './button.interface';
import styles from './button.module.css';

const Button = ({
  type = ButtonTypeEnum.PRIMARY,
  className = '',
  children = null,
  onClick,
}: PropsWithChildren<ButtonProps>): ReactElement => {
  const getTypeStyles = useMemo(() => {
    switch (type) {
      case ButtonTypeEnum.SECONDARY:
        return styles.buttonSecondary;
      case ButtonTypeEnum.PRIMARY:
      default:
        return styles.buttonPrimary;
    }
  }, [type]);

  return (
    <button className={classnames(className, styles.button, getTypeStyles)} onClick={onClick}>
      {children}
    </button>
  );
};

export default memo(Button);
