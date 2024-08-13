import { PropsWithChildren, ReactElement } from 'react';

import { View } from 'react-native';

import { CardProps } from './card.interface';

const ElementLayout = ({
  // className = '',
  children = null,
}: PropsWithChildren<CardProps>): ReactElement => {
  return <View>{children}</View>;
};

export default ElementLayout;
