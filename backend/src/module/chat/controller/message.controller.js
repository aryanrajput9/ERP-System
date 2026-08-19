import { HTTP_STATUS } from "../../../constant/http-statuscode.js";
import { getIO } from "../../../services/socket.io.js";
import { ApiResponse } from "../../../utils/api-respinse.js";
import { asyncHandler } from "../../../utils/async-hanlder.js";
import messageRepository from "../repository/message.repository.js";
import messageServices from "../services/message.service.js";



const messageController = {
    createMessage: asyncHandler(async (req, res) => {

        const { receiverId, message } = req.body;
        const senderId = req.employee._id
        const messages = await messageServices.createMessage(senderId, receiverId, message);

        const io = getIO();


        io.to(receiverId.toString()).emit("recive-message", {
            messages,
            senderId: senderId.toString(),
        })


        return res.status(HTTP_STATUS.CREATED).json(
            new ApiResponse(
                HTTP_STATUS.CREATED,
                "Message create successfull",
                messages
            )
        )
    }),
    getMessages: asyncHandler(async (req, res) => {

        const { receiverId } = req.params;

        const senderId = req.employee.id;

        const messages = await messageRepository.getMessages(
            senderId,
            receiverId
        );

        return res.status(HTTP_STATUS.OK).json(
            new ApiResponse(
                HTTP_STATUS.OK,
                "Messages fetched successfully",
                messages
            )
        );
    })
};





export default messageController