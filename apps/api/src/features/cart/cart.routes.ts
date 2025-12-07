import express from 'express';

import { updateCartItemController } from './controllers/update-cart.controller';
import { getCartController } from './controllers/get-cart.controller';
import { deleteCartItemController } from './controllers/delete-cart.controller';

const cartRoute: express.Router = express.Router();

cartRoute.get('/', getCartController);
cartRoute.put('/item/:id', updateCartItemController);
cartRoute.delete('/item/:id', deleteCartItemController);

export { cartRoute };
