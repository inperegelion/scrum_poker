import mongoose, { Connection } from 'mongoose';

let database: Connection;

export const connectMongo = () => {
    const CONNECTION_URI = 'mongodb://localhost:27017/scrum_poker'; // todo: get it from .env

    if (database) return;

    mongoose.connect(CONNECTION_URI);

    database = mongoose.connection;

    database.once('open', async () => {
        console.log('🍃 Connected to database');
    });

    database.on('error', () => {
        console.log('🍃 Error connecting to database');
    });
};

export const disconnectMongo = () => {
    if (!database) {
        return;
    }
    mongoose.disconnect();
};
