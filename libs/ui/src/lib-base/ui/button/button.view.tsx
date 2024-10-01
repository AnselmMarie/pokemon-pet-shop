import { memo, ReactElement, useMemo } from 'react';

import { useRenderStyles } from '@pokemon-pet-shop/hooks';
import { classNamesUtil } from '@pokemon-pet-shop/utils';

import { globalStyles } from '../../styles/css/global.module';

import ButtonElement from './button.element.view';
import { ButtonSizeEnum, ButtonTypeEnum } from './button.enum';
import { ButtonProps } from './button.interface';
import { styles } from './button.module';

const Button = ({
  type = ButtonTypeEnum.PRIMARY,
  className = '',
  text = null,
  size = ButtonSizeEnum.STANDARD,
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

  const getSizeStyles = useMemo(() => {
    switch (size) {
      case ButtonSizeEnum.LARGE:
        return newStyles.large;
      case ButtonSizeEnum.STANDARD:
      default:
        return newStyles.standard;
    }
  }, [size, newStyles]);

  const getDisabledStyles = useMemo(() => {
    return isDisabled ? globalStyles.disabledElementBg : '';
  }, [isDisabled]);

  return (
    <ButtonElement
      text={text}
      className={classNamesUtil(
        className,
        newStyles.button,
        getTypeStyles,
        getSizeStyles,
        getDisabledStyles
      )}
      isDisabled={isDisabled}
      onClick={onClick}
    />
  );
};

export default memo(Button);
