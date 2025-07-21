import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import path from 'node:path';

const browserDistFolder = path.join(process.cwd(), 'dist/frontend');

const app = express();
const angularApp = new AngularNodeAppEngine();

console.log('Starting Angular SSR server...');

/**
 * Beispiel: eigene API-Endpoints hier definieren (optional)
 *
 * app.get('/api/example', (req, res) => {
 *   res.json({ message: 'Hello from API' });
 * });
 */

/**
 * Statische Dateien aus dem Browser-Build bereitstellen
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Alle anderen Anfragen werden über Angular SSR gerendert
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Server starten, wenn das Modul direkt ausgeführt wird
 */
console.log("here");
if (isMainModule(import.meta.url)) {
  console.log("here not");
  const port = process.env['PORT'] ? Number(process.env['PORT']) : 4000;

  app.listen(port, (error) => {
    if (error) {
      console.error('Error starting server:', error);
      throw error;
    }
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Für CLI oder Serverless-Umgebungen exportieren
 */
export const reqHandler = createNodeRequestHandler(app);
