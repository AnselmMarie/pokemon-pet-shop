import { PropsWithChildren } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { ElementLayoutProps } from './box.interface';

export const Box = ({
  className = '',
  children = null,
  onClick = undefined,
}: PropsWithChildren<ElementLayoutProps>) => {
  if (typeof onClick === 'function') {
    return (
      <TouchableOpacity onPress={onClick}>
        <View className={className}>{children}</View>
      </TouchableOpacity>
    );
  }
  return <View className={className}>{children}</View>;
};
