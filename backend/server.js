import { app } from './src/app.js';
import { connectDb } from './src/config/db.js';
import { env } from './src/config/env.js'
import http from 'http'
import { initSocket } from './src/services/socket.io.js';



// Bootstrap the HTTP server, real-time socket layer, database connection, and configured port.
function startServer() {

    // Socket.IO shares the same HTTP server as the Express application.
    const server = http.createServer(app);
    initSocket(server)

    // The database connection is started before accepting application traffic.
    connectDb()
    server.listen(env.port, () => {
        console.log(`✅ server is running http:/localhost/${env.port}`)
    })
};

startServer()