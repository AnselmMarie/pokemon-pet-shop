import { ReactElement } from 'react';

import { ButtonProps } from './button.interface';

const ButtonElement = ({ className = '', text = null, onClick }: ButtonProps): ReactElement => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonElement;
