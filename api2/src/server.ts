import express from 'express';
import { connectMongo } from './db';

import roomsRouter from './routers/rooms';

const PORT = process.env.PORT ?? 3000;
const app = express();
connectMongo();
// middlewares
app.use(express.json());

// routers
app.use('/rooms', roomsRouter);

app.listen(PORT);
console.log(`👂 Listening on a port: ${PORT}`);
