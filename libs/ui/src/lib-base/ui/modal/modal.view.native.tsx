import { PropsWithChildren, ReactElement } from 'react';

import { View } from 'react-native';

import { ElementLayoutProps } from './modal.interface';

const ElementLayout = ({
  className = '',
  children = null,
}: PropsWithChildren<ElementLayoutProps>): ReactElement => {
  return <View style={className}>{children}</View>;
};

export default ElementLayout;
