/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

// import express from 'express';
// import * as path from 'path';

// const app = express();

// app.use('/assets', express.static(path.join(__dirname, 'assets')));

// app.get('/api', (req, res) => {
//   res.send({ message: 'Welcome to api!' });
// });

// const port = process.env.PORT || 3333;
// const server = app.listen(port, () => {
//   console.log(`Listening at http://localhost:${port}/api`);
// });
// server.on('error', console.error);

import cors from 'cors';
import express from 'express';

// import { cartRoute } from './api/v1/cart';
import { pokemonRoute } from './api/pokemon';
// import { pricingRoute } from './api/v1/pricing/routes/pricing.route';
import { cacheMiddleware } from './middleware/cache.middleware';

const app = express();

// Middleware
app.set('trust proxy', true);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const whitelist = [
  'http://localhost:4200',
  'http://localhost:80',
  'http://localhost:3333',
];
app.use(
  cors({
    origin: function (origin: any, callback) {
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
// app.use('/api/cart', cartRoute);
// app.use('/api/pricing', pricingRoute);

// Error Handling Middleware
app.use((err: any, req: any, res: any, next: any) => {
  res.status(500).json({ error: err.message });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
