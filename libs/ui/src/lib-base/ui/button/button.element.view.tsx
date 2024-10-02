import { ReactElement } from 'react';

import { UiElementLayout } from '../element.layout';
import { UiIcon } from '../icon';

import { ButtonProps } from './button.interface';
import { styles } from './button.module';

const ButtonElement = ({
  className = '',
  text = null,
  appendIcon = '',
  isDisabled,
  onClick,
}: ButtonProps): ReactElement => {
  return (
    <button className={className} disabled={isDisabled} onClick={onClick}>
      <UiElementLayout className={styles.buttonInnerWrapper}>
        {text}
        {appendIcon ? <UiIcon icon={appendIcon} /> : null}
      </UiElementLayout>
    </button>
  );
};

export default ButtonElement;
