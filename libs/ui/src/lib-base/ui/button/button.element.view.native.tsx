import { ReactElement } from 'react';

import { useRenderStyles } from '@pokemon-pet-shop/hooks';
import { classNamesUtil } from '@pokemon-pet-shop/utils';
import { TouchableHighlight, Text } from 'react-native';

import { UiElementLayout } from '../element.layout';
import { UiIcon } from '../icon';
import { UiImage } from '../image';
import { UiSkeleton } from '../skeleton';

import { ButtonProps } from './button.interface';
import { styles } from './button.module.native';

const ButtonElement = ({
  className = '',
  text,
  classNameText,
  appendIcon = '',
  appendImage = '',
  isDisabled,
  isLoading,
  onClick,
}: ButtonProps): ReactElement => {
  const { newStyles } = useRenderStyles(styles);

  return (
    <TouchableHighlight
      // activeOpacity={0.6}
      // underlayColor="#DDDDDD"
      style={className}
      disabled={isDisabled || isLoading}
      onPress={onClick}
    >
      {isLoading ? (
        <UiElementLayout className={classNamesUtil(newStyles.buttonInnerIsLoadingWrapper)}>
          <UiSkeleton />
        </UiElementLayout>
      ) : (
        <UiElementLayout className={newStyles.buttonInnerWrapper}>
          <Text style={classNamesUtil(classNameText, newStyles.text)}>{text}</Text>
          {appendImage ? <UiImage src={appendImage} className={newStyles.appendImage} /> : null}
          {appendIcon ? <UiIcon icon={appendIcon} /> : null}
        </UiElementLayout>
      )}
    </TouchableHighlight>
  );
};

export default ButtonElement;
