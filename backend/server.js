import { app } from './src/app.js';
import { connectDb } from './src/config/db.js';
import { env } from './src/config/env.js'
import http from 'http'
import { initSocket } from './src/services/socket.io.js';



function startServer() {

    const server = http.createServer(app);
    initSocket(server)

    connectDb()
    server.listen(env.port, () => {
        console.log(`✅ server is running http:/localhost/${env.port}`)
    })
};

startServer()