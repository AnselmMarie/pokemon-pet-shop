import { PropsWithChildren, ReactElement } from 'react';
import { View } from 'react-native';

import { ContainerProps } from './container.interface';

export const Container = ({
  className = '',
  children = null,
}: PropsWithChildren<ContainerProps>): ReactElement => {
  return <View className={`mx-auto ${className}`}>{children}</View>;
};
