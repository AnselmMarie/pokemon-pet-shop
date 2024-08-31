import { memo, ReactElement, useMemo } from 'react';

import { classNamesUtil } from '@pokemon-pet-shop/utils';

import ButtonElement from './button.element.view';
import { ButtonTypeEnum } from './button.enum';
import { ButtonProps } from './button.interface';
import { styles } from './button.module';

const Button = ({
  type = ButtonTypeEnum.PRIMARY,
  className = '',
  text = null,
  onClick,
}: ButtonProps): ReactElement => {
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
    <ButtonElement
      text={text}
      className={classNamesUtil(className, styles.button, getTypeStyles)}
      onClick={onClick}
    />
  );
};

export default memo(Button);
