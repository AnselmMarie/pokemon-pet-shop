import { pokemonRoute } from '../features/pokemon/pokemon.routes';
import { cartRoute } from '../features/cart/cart.routes';

export const registerRoutes = (app: any) => {
  app.use('/api/pokemon', pokemonRoute);
  app.use('/api/cart', cartRoute);
};

