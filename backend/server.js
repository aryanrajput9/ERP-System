import { app } from './src/app.js';
import { connectDb } from './src/config/db.js';
import { env } from './src/config/env.js'



function startServer() {
    connectDb()
    app.listen(env.port, () => {
        console.log(`✅ server is running http:/localhost/${env.port}`)
    })
};

startServer()