import { Server } from "socket.io";

let io;

export const initSocket = (server) => {
    // Attach Socket.IO to the same HTTP server used by Express for real-time chat events.
    io = new Server(server, {
        cors: {
            origin: "http://localhost:5173",
            credentials: true,
        },
    });

    io.on("connection", (socket) => {
        console.log("User connected:", socket.id);


        socket.on("join-room", (employeeId) => {

            // Employee IDs act as private rooms so messages can target one recipient.
            socket.join(employeeId.toString());


            console.log(
                `Employee ${employeeId} joined room`
            );

            socket.emit("user-online", "Online");

        });

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        });
    });

    return io;
};

export const getIO = () => {
    if (!io) {
        // Prevent controllers from emitting events before server initialization has completed.
        throw new Error("Socket.io is not initialized");
    }

    return io;
};