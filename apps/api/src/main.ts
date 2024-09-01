import express from 'express';

import { pokemonRoute } from './api/v1/pokemon';

const app = express();

// Middleware
app.use(express.json());

// Using Routes
app.use('/api/pokemon', pokemonRoute);

// Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

server.on('error', console.error);
