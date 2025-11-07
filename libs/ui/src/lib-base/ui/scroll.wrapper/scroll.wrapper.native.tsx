import { PropsWithChildren, ReactElement, useRef } from 'react';

import { ScrollView } from 'react-native';

const ScrollWrapper = ({ children }: PropsWithChildren): ReactElement => {
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <ScrollView
      ref={(ref) => {
        scrollViewRef.current = ref;
      }}
      contentInsetAdjustmentBehavior="automatic"
    >
      {children}
    </ScrollView>
  );
};

export default ScrollWrapper;
