import { PropsWithChildren } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { ElementLayoutProps } from './box.interface';

export function Box({
  className = '',
  children = null,
  onClick = undefined,
}: PropsWithChildren<ElementLayoutProps>) {
  if (typeof onClick === 'function') {
    return (
      <TouchableOpacity onPress={onClick}>
        <View style={className}>{children}</View>
      </TouchableOpacity>
    );
  }
  return <View style={className}>{children}</View>;
}

export default Box;
