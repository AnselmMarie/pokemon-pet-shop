import { memo, PropsWithChildren, ReactElement } from 'react';

import { Text } from 'react-native';

import { TypographyProps } from './typography.interface';

const Typography = ({
  className = '',
  children = null,
  onClick,
}: PropsWithChildren<TypographyProps>): ReactElement => {
  return (
    <Text style={className} onPress={onClick}>
      {children}
    </Text>
  );
};

export default memo(Typography);
