import { date } from "zod";
import { HTTP_STATUS } from "../../../constant/http-statuscode.js";
import { ApiResponse } from "../../../utils/api-respinse.js";
import { asyncHandler } from "../../../utils/async-hanlder.js";
import taskServices from "../services/task.service.js";



const taskSanitizer = (data = {}) => {
    return {
        title: data.title.trim() || "",

        description: data.description.trim(),

        assignedTo: data.assignedTo,

        priority: ["Low", "Medium", "High"].includes(data.priority)
            ? data.priority
            : "Medium",

        status: ["Pending", "In Progress", "Completed"].includes(data.status)
            ? data.status
            : "Pending",

        startDate:
            data.startDate && !isNaN(new Date(data.startDate))
                ? new Date(data.startDate)
                : null,

        dueDate:
            data.dueDate && !isNaN(new Date(data.dueDate))
                ? new Date(data.dueDate)
                : null,

        estimatedHours:
            !isNaN(Number(data.estimatedHours))
                ? Number(data.estimatedHours)
                : 0,

        tags: Array.isArray(data.tags)
            ? data.tags
                .map((tag) => tag?.trim())
                .filter(Boolean)
            : [],
    };
};

const taskController = {

    createTask: asyncHandler(async (req, res) => {

        const createdId = req.employee.employeeId;

        const input = {
            ...req.body,
            createdBy: createdId,
        };

        const task = await taskServices.createTask(input);


        return res.status(201).json(
            new ApiResponse(
                HTTP_STATUS.CREATED,
                "Task Create successFully",
                taskSanitizer(task)
            )
        )

    }),

    getAllTask: asyncHandler(async (_req, res) => {

        const allTask = await taskServices.getALLTask();

        return res.status(HTTP_STATUS.OK).json(
            new ApiResponse(
                HTTP_STATUS.OK,
                "All Task",
                allTask.map(taskSanitizer)
            )
        )
    })
}


export default taskController