import express from 'express';

import { getPokemonDetailsController } from './controllers/pokemon-details.controller';
import { getPokemonListController } from './controllers/pokemon-list.controller';
import { getPokemonSpeciesController } from './controllers/pokemon-species.controller';
import { getPricingController } from './controllers/pricing.controller';

const pokemonRoute: express.Router = express.Router();

pokemonRoute.get('/list', getPokemonListController);
pokemonRoute.get('/details/:id', getPokemonDetailsController);
pokemonRoute.get('/species/:id', getPokemonSpeciesController);
pokemonRoute.get('/pricing', getPricingController);

export { pokemonRoute };
