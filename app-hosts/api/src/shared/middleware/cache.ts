import { Request, Response, NextFunction } from 'express';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

export const cacheMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const noCaching = req.originalUrl.includes('cart');
  const key = req.originalUrl;
  const cachedResponse = !noCaching ? cache.get(key) : null;

  if (cachedResponse) {
    res.send(cachedResponse);
    return;
  }

  const resWithSendResponse = res as unknown as {
    sendResponse: (body: unknown) => import('express').Response;
  } & import('express').Response;

  resWithSendResponse.sendResponse = res.send;
  res.send = (body: unknown) => {
    if (!noCaching) {
      cache.set(key, body);
    }
    return resWithSendResponse.sendResponse(body);
  };
  next();
};
