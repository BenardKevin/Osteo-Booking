import express from 'express';
import path, { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

// The Express app is exported so that it can be used by serverless Functions.
export function app() {
  const server = express();
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const serverDistFolder = __dirname;
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  server.use(express.static(path.join(__dirname, '/dist/osteoApp')));

  server.get('/*', (req, res) => {
    res.sendFile(indexHtml);
  });

  return server;
}

function run() {
  const port = process.env.PORT || 8080;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

run();
