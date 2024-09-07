import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

const cacheMiddleware = (req, res, next) => {
  const noCaching = req.originalUrl.includes('cart');
  const key = req.originalUrl;
  const cachedResponse = !noCaching ? cache.get(key) : null;

  if (cachedResponse) {
    console.log('cached');
    res.send(cachedResponse);
  } else {
    res.sendResponse = res.send;
    res.send = (body) => {
      if (!noCaching) {
        cache.set(key, body);
      }
      res.sendResponse(body);
    };
    next();
  }
};

// const internalCacheMiddleware = () => {};

export { cacheMiddleware };
