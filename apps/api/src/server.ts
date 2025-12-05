import { app } from './app';
import { env } from './config';

const port = env.port;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);

