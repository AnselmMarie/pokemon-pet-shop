import express from 'express';

import { getPokemonListController } from '../controllers/pokemon.list.controller';
import { getPokemonSpeciesController } from '../controllers/pokemon.species.controller';

const pokemonRoute = express.Router();

pokemonRoute.get('/list', getPokemonListController);
pokemonRoute.get('/species/:id', getPokemonSpeciesController);

export { pokemonRoute };
