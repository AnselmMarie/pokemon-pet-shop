import { PropsWithChildren, ReactElement, useRef } from 'react';
import { ScrollView } from 'react-native';

export const ModalScroll = ({ children }: PropsWithChildren): ReactElement => {
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <ScrollView
      ref={(ref) => {
        scrollViewRef.current = ref;
      }}
      contentInsetAdjustmentBehavior="automatic"
      className="p-sm h-[86%] flex-grow"
    >
      {children}
    </ScrollView>
  );
};
