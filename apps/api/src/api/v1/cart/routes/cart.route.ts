import express from 'express';

import {
  getCartController,
  deleteCartItemController,
  updateCartItemController,
} from '../controllers/cart.controller';

const cartRoute = express.Router();

cartRoute.get('/', getCartController);
cartRoute.put('/item/:id', updateCartItemController);
cartRoute.delete('/item/:id', deleteCartItemController);

export { cartRoute };
