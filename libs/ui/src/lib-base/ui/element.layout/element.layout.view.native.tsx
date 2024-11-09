import { PropsWithChildren, ReactElement } from 'react';

import { TouchableOpacity, View } from 'react-native';

import { ElementLayoutProps } from './element.layout.interface';

const ElementLayout = ({
  className = '',
  children = null,
  onClick = null,
}: PropsWithChildren<ElementLayoutProps>): ReactElement => {
  if (onClick !== null) {
    return (
      <TouchableOpacity onPress={onClick}>
        <View style={className}>{children}</View>
      </TouchableOpacity>
    );
  }
  return <View style={className}>{children}</View>;
};

export default ElementLayout;
