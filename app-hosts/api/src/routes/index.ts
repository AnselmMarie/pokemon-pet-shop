import { Application } from 'express';

import { pokemonRoute } from '../features/pokemon/pokemon.routes';
import { cartRoute } from '../features/cart/cart.routes';

export const registerRoutes = (app: Application) => {
  app.use('/api/pokemon', pokemonRoute);
  app.use('/api/cart', cartRoute);
};
