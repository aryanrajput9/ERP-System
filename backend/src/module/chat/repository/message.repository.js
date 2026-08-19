import Message from "../schema/message.schema.js";



const messageRepository = {

    createMessage: async (senderId, receiverId, message) => {

        const messages = await Message.create({
            senderId, receiverId, message
        });

        return messages
    },
    getMessages: async (senderId, receiverId) => {

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