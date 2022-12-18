import mongoose from 'mongoose';

export async function connectDB() {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`🍃 MongoDB Connected: ${connect.connection.host}`);
    } catch (error) {
        console.error('🍃', error);
    }
}
