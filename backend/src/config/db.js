import mongoose from 'mongoose'
import { env } from './env.js';

export const connectDb = async () => {
    try {


        const conn = await mongoose.connect(env.mongoUrl);
        console.log(`✅ mongo connect ${conn.connection.host}`)

    } catch (fallback) {
        console.log("mongo connection Failed ❌", fallback)
        process.exit(1)
    }

}