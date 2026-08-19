import mongoose from 'mongoose'
import { env } from './env.js';

export const connectDb = async () => {
    try {


        // Mongoose manages the connection used by all model and repository operations.
        const conn = await mongoose.connect(env.mongoUrl);
        console.log(`✅ mongo connect ${conn.connection.host}`)

    } catch (fallback) {
        // The application cannot serve database-backed requests safely without a connection.
        console.log("mongo connection Failed ❌", fallback)
        process.exit(1)
    }

}