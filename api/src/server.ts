import express from 'express';
import cors from 'cors';

import { connectMongo } from './db';

import roomsRouter from './routers/rooms';

const PORT = process.env.PORT ?? 3000;
const app = express();
connectMongo();

// middlewares
app.use(cors());
app.use(express.json());

// routers
app.use('/room', roomsRouter);

app.listen(PORT);
console.log(`👂 Listening on a port: ${PORT}`);
