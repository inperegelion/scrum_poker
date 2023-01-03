import express from 'express';

import { connectMongo } from './db';

import roomsRouter from './routers/rooms';
import path from 'path';
import cors from 'cors';

const envFileLocation = path.relative(process.cwd(), '../.env');
require('dotenv').config({ path: envFileLocation });

const PORT = process.env.API_RUNNING_PORT ?? 3000;
const app = express();

connectMongo(process.env.MONGO_CONNECTION_STRING);

// middlewares
app.use(cors());
app.use(express.json());

// routers
app.use('/room', roomsRouter);

app.listen(PORT);
console.log(`👂 Listening on a port: ${PORT}`);
