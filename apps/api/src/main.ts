import cors from 'cors';
import express from 'express';

import { pokemonRoute } from './api/v1/pokemon';
import { cacheMiddleware } from './middleware/cache.middleware';

const app = express();

// Middleware
app.set('trust proxy', true);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cacheMiddleware);

// Using Routes
app.use('/api/pokemon', pokemonRoute);

// Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

const port = process.env.SERVER_PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://${process.env.SERVER_HOST}:${port}`);
});

server.on('error', console.error);
