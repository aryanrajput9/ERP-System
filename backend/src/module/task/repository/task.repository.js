import taskSchema from "../schema/task.schema.js";



const taskRepository = {

    createTask: async (input) => {

        // Mongoose validates and stores the task, including assigned employee references.
        const task = await taskSchema.create(input);
        return task
    },
    getAllTask: async () => {
        // Populate assignee profile fields so task consumers can render ownership without another query.
        const allTask = await taskSchema.find().populate(
            "assignedTo", "firstName lastName employeeId role profileImage"
        ).sort({ createedAt: -1 });
        return allTask
    }
}


export default taskRepository