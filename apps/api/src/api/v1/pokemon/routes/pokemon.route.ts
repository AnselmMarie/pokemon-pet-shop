import express from 'express';

import { getPokemonDetailsController } from '../controllers/pokemon.details.controller';
import { getPokemonListController } from '../controllers/pokemon.list.controller';
import { getPokemonSpeciesController } from '../controllers/pokemon.species.controller';

const pokemonRoute = express.Router();

pokemonRoute.get('/list', getPokemonListController);
pokemonRoute.get('/details/:id', getPokemonDetailsController);
pokemonRoute.get('/species/:id', getPokemonSpeciesController);

export { pokemonRoute };
