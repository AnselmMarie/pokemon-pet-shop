import { ReactElement } from 'react';

import { ButtonProps } from './button.interface';

const ButtonElement = ({
  className = '',
  text = null,
  isDisabled,
  onClick,
}: ButtonProps): ReactElement => {
  return (
    <button className={className} disabled={isDisabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonElement;
