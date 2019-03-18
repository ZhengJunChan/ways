import express, { Router } from 'express';
import bodyParser from 'body-parser';

import { port } from './config';
import initMockRouter from './router';

const app = express();
app.use(bodyParser.json());

const router = new Router();
initMockRouter(router);

app.use(router);
app.listen(port, () => {
  console.log(`mock server started at ${port}`);
});
