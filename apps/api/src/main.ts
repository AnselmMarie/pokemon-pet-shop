import cors from 'cors';
import express from 'express';

import { cartRoute } from './api/v1/cart';
import { pokemonRoute } from './api/v1/pokemon';
import { pricingRoute } from './api/v1/pricing/routes/pricing.route';
import { cacheMiddleware } from './middleware/cache.middleware';

const app = express();

// Middleware
app.set('trust proxy', true);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const whitelist = ['http://localhost:4200', 'http://localhost:80', 'http://localhost:3333'];
app.use(
  cors({
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);
app.use(cacheMiddleware);

// Using Routes
app.use('/api/pokemon', pokemonRoute);
app.use('/api/cart', cartRoute);
app.use('/api/pricing', pricingRoute);

// Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

const port = process.env.SERVER_PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://${process.env.SERVER_HOST}:${port}`);
});

server.on('error', console.error);
