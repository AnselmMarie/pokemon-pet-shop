/* @todo this component needs to be updated */

import { ReactElement } from 'react';

// import { useController } from 'react-hook-form';

import { Box } from '@pokemon-pet-shop/ui-box';
import { Icon } from '@pokemon-pet-shop/ui-icon';

import InputElement from './input-element';
import { InputProps } from './input.interface';
// import styles from './input.module.css';

export const Input = ({
  // name = '',
  // type = InputTypeEnum.TEXT,
  // control = null,
  // defaultValue = '',
  iconClassname = '',
  appendIcon,
}: InputProps): ReactElement => {
  // const { field } = useController({
  //   control,
  //   defaultValue,
  //   name,
  // });

  return (
    <Box className="relative flex z-0 items-center w-full">
      <InputElement
        className="w-full"
        // id={id}
        // marginBottom={helper || errorMessage ? '$2' : '$5'}
        // inputMode={type}
        // value={field?.value}
        // onChange={field?.onChange}
      />
      {appendIcon ? (
        <Icon classNameIcon={`ml-sm ${iconClassname}`} icon={appendIcon} size={29} />
      ) : null}
    </Box>
  );
};
