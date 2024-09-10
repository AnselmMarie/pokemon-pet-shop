import { ReactElement } from 'react';

import { TouchableHighlight, Text } from 'react-native';

import { ButtonProps } from './button.interface';

const ButtonElement = ({
  className = '',
  text,
  isDisabled,
  onClick,
}: ButtonProps): ReactElement => {
  const { color, ...args } = className;

  return (
    <TouchableHighlight
      // activeOpacity={0.6}
      // underlayColor="#DDDDDD"
      style={args}
      disabled={isDisabled}
      onPress={onClick}
    >
      <Text style={{ color: color, textAlign: 'center' }}>{text}</Text>
    </TouchableHighlight>
  );
};

export default ButtonElement;
