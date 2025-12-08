import express from 'express';
import { corsConfig } from './config';
import { cacheMiddleware, errorMiddleware } from './shared/middleware';
import { registerRoutes } from './routes';

const app: express.Application = express();

// Middleware
app.set('trust proxy', true);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(corsConfig);
app.use(cacheMiddleware);

// Routes
registerRoutes(app);

// Error Handling Middleware
app.use(errorMiddleware);

export { app };
