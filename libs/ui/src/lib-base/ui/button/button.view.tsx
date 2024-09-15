import { memo, ReactElement, useMemo } from 'react';

import { useRenderStyles } from '@pokemon-pet-shop/hooks';
import { classNamesUtil } from '@pokemon-pet-shop/utils';

import ButtonElement from './button.element.view';
import { ButtonTypeEnum } from './button.enum';
import { ButtonProps } from './button.interface';
import { styles } from './button.module';

const Button = ({
  type = ButtonTypeEnum.PRIMARY,
  className = '',
  text = null,
  isDisabled = false,
  onClick,
}: ButtonProps): ReactElement => {
  const { newStyles } = useRenderStyles(styles);

  const getTypeStyles = useMemo(() => {
    switch (type) {
      case ButtonTypeEnum.SECONDARY:
        return newStyles.buttonSecondary;
      case ButtonTypeEnum.PRIMARY:
      default:
        return newStyles.buttonPrimary;
    }
  }, [type, newStyles]);

  return (
    <ButtonElement
      text={text}
      className={classNamesUtil(className, newStyles.button, getTypeStyles)}
      isDisabled={isDisabled}
      onClick={onClick}
    />
  );
};

export default memo(Button);
