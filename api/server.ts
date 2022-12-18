import express from 'express';
import cors from 'cors';

import { errorHandler } from './middleware/errorMiddleware';
import { connectDB } from './config/db';

require('dotenv').config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/room', require('./routes/roomRouter'));
app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));
