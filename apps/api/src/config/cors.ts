import cors from 'cors';

const whitelist = [
  'http://localhost:4200',
  'http://localhost:80',
  'http://localhost:3333',
];

export const corsConfig = cors({
  origin: function (origin: any, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
});

