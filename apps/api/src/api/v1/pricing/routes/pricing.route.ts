import express from 'express';

import { getPricingController } from '../controllers/pricing.controller';

const pricingRoute = express.Router();

pricingRoute.get('/', getPricingController);

export { pricingRoute };
