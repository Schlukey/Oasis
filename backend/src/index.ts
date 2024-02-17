import http from 'http';
import app from './app';

const server = http.createServer(app);
const port = process.env.PORT ?? 4200;

server.listen(port, () => {
  console.log('server running');
});
