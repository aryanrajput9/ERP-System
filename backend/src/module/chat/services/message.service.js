import { HTTP_STATUS } from "../../../constant/http-statuscode.js";
import { ApiError } from "../../../utils/api-error.js";
import messageRepository from "../repository/message.repository.js";


const messageServices = {

    createMessage: async (senderId, receiverId, message) => {

        if (!senderId) throw new ApiError(HTTP_STATUS.BAD_REQUEST, "SenderId is required");

        if (!receiverId) throw new ApiError(HTTP_STATUS.BAD_REQUEST, "ReciverId is required");

        const messages = await messageRepository.createMessage(senderId, receiverId, message);

        return messages
    }
}


export default messageServices