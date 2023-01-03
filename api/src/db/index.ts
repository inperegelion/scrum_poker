import mongoose, { Connection } from 'mongoose';

let database: Connection;

export const connectMongo = (connectionString: string) => {
    if (database) return;
    if (!connectionString)
        throw 'Missing connection string to Mongo Instance! Might be .env is missing.';

    mongoose.connect(connectionString);

    database = mongoose.connection;

    database.once('open', async () => {
        console.log('🍃 Connected to database');
    });
``
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
