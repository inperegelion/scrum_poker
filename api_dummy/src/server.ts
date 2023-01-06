import express from 'express';
import cors from 'cors';

import helloRouter from './routers/hello';

require('dotenv').config();

const PORT = process.env.API_RUNNING_PORT ?? 3001;
const app = express();

app.use(express.json());
app.use('/', helloRouter);

app.listen(PORT);
console.log(`👂 Listening on a port: ${PORT}`);
