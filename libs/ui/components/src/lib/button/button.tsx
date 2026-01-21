import { ReactElement, useEffect, useMemo, useState } from 'react';

import ButtonElement from './button-element';
import { ButtonProps } from './button-interface';

export const Button = ({
  type = 'primary',
  className = '',
  classNameText = '',
  text = null,
  size = 'standard',
  appendIcon,
  appendImage = '',
  timerText = '',
  timerStyle = null,
  isDisabled = false,
  isSuccess = false,
  isLoading = false,
  onClick,
}: ButtonProps): ReactElement => {
  const [displaySuccessStyle, setDisplaySuccessStyle] = useState(false);

  const getTimerStyle = useMemo(() => {
    return timerStyle || 'cursor-not-allowed opacity-50 bg-success text-white';
  }, [timerStyle]);

  const getTypeStyles = useMemo(() => {
    switch (type) {
      case 'secondary':
        return 'bg-white';
      case 'primary':
      default:
        return 'bg-primary';
    }
  }, [type]);

  const getTypeTextStyles = useMemo(() => {
    switch (type) {
      case 'secondary':
        return 'text-primary';
      case 'primary':
      default:
        return 'text-white';
    }
  }, [type]);

  const getSizeStyles = useMemo(() => {
    switch (size) {
      case 'large':
        return 'min-w-[230px] h-[66px] px-[30px] py-[10px] flex items-center justify-center';
      case 'standard':
      default:
        return 'px-[15px] py-[10px] flex items-center justify-center';
    }
  }, [size]);

  const getSizeTextStyles = useMemo(() => {
    switch (size) {
      case 'large':
        return 'text-xl';
      case 'standard':
      default:
        return 'text-md';
    }
  }, [size]);

  const getDisabledStyles = useMemo(() => {
    return isDisabled ? 'bg-primaryDisabled' : '';
  }, [isDisabled]);

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
      className={`
        ${className}
        rounded-pill cursor-pointer border-0 text-center p-sm
        ${getTypeStyles}
        ${getSizeStyles}
        ${getDisabledStyles}
        ${displaySuccessStyle ? getTimerStyle : ''}
      `}
      classNameText={`
        ${classNameText}
        ${getTypeTextStyles}
        ${getSizeTextStyles}
      `}
      // classNameText={classNamesUtil(
      //   classNameText,
      //   getTypeTextStyles,
      //   getSizeTextStyles
      // )}
      appendImage={appendImage}
      appendIcon={appendIcon}
      isDisabled={isDisabled || displaySuccessStyle}
      isLoading={isLoading}
      onClick={onClick}
    />
  );
};
