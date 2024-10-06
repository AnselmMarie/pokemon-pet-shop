import { ReactElement } from 'react';

import { useRenderStyles } from '@pokemon-pet-shop/hooks';
import { classNamesUtil } from '@pokemon-pet-shop/utils';
import { TouchableHighlight, Text } from 'react-native';

import { UiElementLayout } from '../element.layout';
import { UiIcon } from '../icon';
import { UiImage } from '../image';

import { ButtonProps } from './button.interface';
import { styles } from './button.module.native';

const ButtonElement = ({
  className = '',
  text,
  classNameText,
  appendIcon = '',
  appendImage = '',
  isDisabled,
  onClick,
}: ButtonProps): ReactElement => {
  const { ...argsClassName } = className;
  const { newStyles } = useRenderStyles(styles);

  return (
    <TouchableHighlight
      // activeOpacity={0.6}
      // underlayColor="#DDDDDD"
      style={argsClassName}
      disabled={isDisabled}
      onPress={onClick}
    >
      <UiElementLayout className={newStyles.buttonInnerWrapper}>
        <Text style={classNamesUtil(classNameText, newStyles.text)}>{text}</Text>
        {appendImage ? <UiImage src={appendImage} className={newStyles.appendImage} /> : null}
        {appendIcon ? <UiIcon icon={appendIcon} /> : null}
      </UiElementLayout>
    </TouchableHighlight>
  );
};

export default ButtonElement;
