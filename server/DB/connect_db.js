import mongoose from 'mongoose';

async function connectDB() {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${connect.connection.host}`.cyan.underline);
        // await mongoose.connect(process.env.MONGO_URI)
        // console.log("MongoDB connected".blue.bold);
    } catch (error) {
        console.error("Error connecting to MongoDB".red.bold, error.message);
    }
}

export default connectDB;