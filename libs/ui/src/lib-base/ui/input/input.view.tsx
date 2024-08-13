import { ReactElement } from 'react';

import { useController } from 'react-hook-form';

import { UiElementLayout } from '../element-layout';
import { UiIcon } from '../icon';

import { InputTypeEnum } from './input.enum';
import { InputProps } from './input.interface';
import styles from './input.module.css';

const Input = ({
  name = '',
  type = InputTypeEnum.TEXT,
  control = null,
  appendIcon = null,
  defaultValue = '',
}: InputProps): ReactElement => {
  // const { field } = useController({
  //   control,
  //   defaultValue,
  //   name,
  // });

  return (
    <UiElementLayout className={styles.inputWrapper}>
      <input
        className={styles.input}
        // id={id}
        // marginBottom={helper || errorMessage ? '$2' : '$5'}
        // inputMode={type}
        // value={field?.value}
        // onChange={field?.onChange}
      />
      {appendIcon ? <UiIcon icon={appendIcon} classNameIcon={styles.icon} size={29} /> : null}
    </UiElementLayout>
  );
};

export default Input;
