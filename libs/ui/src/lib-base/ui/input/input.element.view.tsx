import { ReactElement } from 'react';

import { classNamesUtil } from '@pokemon-pet-shop/utils';

import styles from './input.module.css';

const InputElement = ({ className = '' }: any): ReactElement => {
  return (
    <input
      className={classNamesUtil(className, styles.input)}
      // id={id}
      // marginBottom={helper || errorMessage ? '$2' : '$5'}
      // inputMode={type}
      // value={field?.value}
      // onChange={field?.onChange}
    />
  );
};

export default InputElement;
