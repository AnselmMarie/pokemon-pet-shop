import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

const cacheMiddleware = (req: any, res: any, next: any) => {
  const noCaching = req.originalUrl.includes('cart');
  const key = req.originalUrl;
  const cachedResponse = !noCaching ? cache.get(key) : null;

  if (cachedResponse) {
    console.log('cached');
    return res.send(cachedResponse);
  }

  res.sendResponse = res.send;
  res.send = (body: any) => {
    if (!noCaching) {
      cache.set(key, body);
    }
    res.sendResponse(body);
  };
  next();
};

// const internalCacheMiddleware = () => {};

export { cacheMiddleware };
