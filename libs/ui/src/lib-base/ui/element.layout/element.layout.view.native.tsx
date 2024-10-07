import { PropsWithChildren, ReactElement } from 'react';

import { TouchableHighlight, View } from 'react-native';

import { ElementLayoutProps } from './element.layout.interface';

const ElementLayout = ({
  className = '',
  children = null,
  onClick = null,
}: PropsWithChildren<ElementLayoutProps>): ReactElement => {
  if (onClick !== null) {
    return (
      <TouchableHighlight onPress={onClick}>
        <View style={className}>{children}</View>
      </TouchableHighlight>
    );
  }
  return <View style={className}>{children}</View>;
};

export default ElementLayout;
