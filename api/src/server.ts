import express from 'express';
import cors from 'cors';

import { connectMongo } from './db';

import roomsRouter from './routers/rooms';
import helloRouter from './routers/hello';

require('dotenv').config();

const PORT = process.env.API_RUNNING_PORT ?? 3001;
const app = express();

connectMongo(process.env.MONGO_CONNECTION_STRING);

// middlewares
app.use(cors());
app.use(express.json());

// routers
app.use('/room', roomsRouter);
app.use('/', helloRouter);

app.listen(PORT);
console.log(`👂 Listening on a port: ${PORT}`);
