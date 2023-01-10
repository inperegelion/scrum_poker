import express from 'express';
import cors from 'cors';
import path from 'path';

import { connectMongo } from './db';
import roomsRouter from './routers/rooms';

require('dotenv').config({ path: '../.env' });

const PORT = process.env.API_RUNNING_PORT ?? 3001;
const app = express();
// const CLIENT_BUILD_PATH = path.join(__dirname, '..', '..', 'client', 'build');
connectMongo(process.env.MONGO_CONNECTION_STRING);

// middlewares
app.use(cors());
app.use(express.json());

// routers
app.use('/api/room', roomsRouter);

// static & client
app.use('/', express.static('build'));
app.use('/*', express.static('build'));

app.listen(PORT);
console.log(`👂 Listening on a port: ${PORT}`);
