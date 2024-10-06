import { memo, ReactElement, useEffect, useMemo, useState } from 'react';

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
  classNameText = '',
  text = null,
  size = ButtonSizeEnum.STANDARD,
  appendIcon = '',
  appendImage = '',
  timerText = '',
  timerStyle = null,
  isDisabled = false,
  isSuccess = false,
  onClick,
}: ButtonProps): ReactElement => {
  const [displaySuccessStyle, setDisplaySuccessStyle] = useState(false);
  const { newStyles } = useRenderStyles(styles);
  const { newStyles: newGlobalStyles } = useRenderStyles(globalStyles);

  const getTimerStyle = useMemo(() => {
    return timerStyle || newStyles.buttonSuccess;
  }, [timerStyle, newStyles]);

  const getTypeStyles = useMemo(() => {
    switch (type) {
      case ButtonTypeEnum.SECONDARY:
        return newStyles.buttonSecondary;
      case ButtonTypeEnum.PRIMARY:
      default:
        return newStyles.buttonPrimary;
    }
  }, [type, newStyles]);

  const getTypeTextStyles = useMemo(() => {
    switch (type) {
      case ButtonTypeEnum.SECONDARY:
        return newStyles.buttonSecondaryText;
      case ButtonTypeEnum.PRIMARY:
      default:
        return newStyles.buttonPrimaryText;
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

  const getSizeTextStyles = useMemo(() => {
    switch (size) {
      case ButtonSizeEnum.LARGE:
        return newStyles.largeText;
      case ButtonSizeEnum.STANDARD:
      default:
        return newStyles.standardText;
    }
  }, [size, newStyles]);

  const getDisabledStyles = useMemo(() => {
    return isDisabled ? newGlobalStyles.disabledElementBg : '';
  }, [isDisabled, newGlobalStyles]);

  const getText = useMemo(() => {
    return displaySuccessStyle ? timerText : text;
  }, [timerText, text, displaySuccessStyle]);

  useEffect(() => {
    if (isSuccess) {
      setDisplaySuccessStyle(true);
      setTimeout(() => {
        setDisplaySuccessStyle(false);
      }, 2000);
    }
  }, [isSuccess]);

  return (
    <ButtonElement
      text={getText}
      className={classNamesUtil(
        className,
        newStyles.button,
        getTypeStyles,
        getDisabledStyles,
        getSizeStyles,
        displaySuccessStyle ? getTimerStyle : ''
      )}
      classNameText={classNamesUtil(classNameText, getTypeTextStyles, getSizeTextStyles)}
      appendImage={appendImage}
      appendIcon={appendIcon}
      isDisabled={isDisabled || displaySuccessStyle}
      onClick={onClick}
    />
  );
};

export default memo(Button);
