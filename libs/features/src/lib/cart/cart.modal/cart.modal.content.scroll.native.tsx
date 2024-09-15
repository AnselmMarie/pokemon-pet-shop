import { PropsWithChildren, ReactElement, useRef } from 'react';

import { useRenderStyles } from '@pokemon-pet-shop/hooks';
import { ScrollView } from 'react-native';

import { styles } from './cart.modal.module';

const CartModalScroll = ({ children }: PropsWithChildren): ReactElement => {
  const scrollViewRef = useRef<null | ScrollView>(null);
  // const { newStyles } = useRenderStyles(styles);

  return (
    <ScrollView
      ref={(ref) => {
        scrollViewRef.current = ref;
      }}
      contentInsetAdjustmentBehavior="automatic"
      style={styles.cartContent}
    >
      {children}
    </ScrollView>
  );
};

export default CartModalScroll;
