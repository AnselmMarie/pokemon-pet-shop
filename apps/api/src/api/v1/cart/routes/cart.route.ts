import express from 'express';

import {
  clearCartController,
  getCartController,
  updateCartController,
} from '../controllers/cart.controller';

const cartRoute = express.Router();

cartRoute.get('/', getCartController);
cartRoute.put('/update/:id', updateCartController);
cartRoute.put('/clear', clearCartController);
// cartRoute.delete('/item/:id', clearCartController);

export { cartRoute };
