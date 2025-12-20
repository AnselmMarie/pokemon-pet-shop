import cors from 'cors';

const whitelist = ['http://localhost:4200', 'http://localhost:80', 'http://localhost:3333'];

export const corsConfig = cors({
  origin: function (origin: string | undefined, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
});
