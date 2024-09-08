import express from 'express';

import {
  clearCartController,
  getCartController,
  removeCartItemController,
  updateCartItemController,
} from '../controllers/cart.controller';

const cartRoute = express.Router();

cartRoute.get('/', getCartController);
cartRoute.put('/update/:id', updateCartItemController);
cartRoute.put('/clear', clearCartController);
cartRoute.delete('/item/:id', removeCartItemController);

export { cartRoute };
