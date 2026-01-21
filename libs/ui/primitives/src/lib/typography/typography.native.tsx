import { PropsWithChildren, ReactElement } from 'react';
import { Text } from 'react-native';

import { TypographyProps } from './typography.interface';

export const Typography = ({
  className = '',
  children = null,
  onClick,
}: PropsWithChildren<TypographyProps>): ReactElement => {
  return (
    <Text className={className} onPress={onClick}>
      {children}
    </Text>
  );
};
