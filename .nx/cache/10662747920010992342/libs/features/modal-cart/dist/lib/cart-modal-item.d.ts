import { ReactElement } from 'react';
import { CartData } from '@pokemon-pet-shop/types';
interface CartModalItemProps {
    el: CartData;
    currIndex: number;
    lastIndex: number;
}
declare const CartModalItem: ({ el, currIndex, lastIndex }: CartModalItemProps) => ReactElement;
export default CartModalItem;
//# sourceMappingURL=cart-modal-item.d.ts.map