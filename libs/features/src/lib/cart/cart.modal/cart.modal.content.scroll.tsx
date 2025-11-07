import { PropsWithChildren, ReactElement } from 'react';

import { UiElementLayout } from '@pokemon-pet-shop/ui';

import { styles } from './cart.modal.module';

const CartModalScroll = ({ children }: PropsWithChildren): ReactElement => {
  return <UiElementLayout className={styles.cartContent}>{children}</UiElementLayout>;
};

export default CartModalScroll;
