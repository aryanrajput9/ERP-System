import { HTTP_STATUS } from "../../../constant/http-statuscode.js";
import { ApiError } from "../../../utils/api-error.js";
import taskRepository from "../repository/task.repository.js";


const taskServices = {

    createTask: async (input) => {

        // Reject an absent request payload before delegating persistence to the repository.
        if (!input) throw new ApiError(HTTP_STATUS.CONFLICT, "all field are required");

        const task = await taskRepository.createTask(input);
        return task

    },
    getALLTask: async (input) => {

        // Keep retrieval in the repository so query and population details stay out of controllers.
        const allTask = await taskRepository.getAllTask();
        return allTask
    }
};


export default taskServices