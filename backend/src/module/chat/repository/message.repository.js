import Message from "../schema/message.schema.js";



const messageRepository = {

    createMessage: async (senderId, receiverId, message) => {

        // Store the two employee references and message body as one conversation entry.
        const messages = await Message.create({
            senderId, receiverId, message
        });

        return messages
    },
    getMessages: async (senderId, receiverId) => {

        // Match either sender/receiver direction, then sort oldest first for chat display order.
        return await Message.find({
            $or: [
                {
                    senderId,
                    receiverId,
                },
                {
                    senderId: receiverId,
                    receiverId: senderId,
                },
            ],
        }).sort({ createdAt: 1 });
    }
};


export default messageRepository