import taskSchema from "../schema/task.schema.js";



const taskRepository = {

    createTask: async (input) => {

        const task = await taskSchema.create(input);
        return task
    },
    getAllTask: async () => {
        const allTask = await taskSchema.find().populate(
            "assignedTo", "firstName lastName employeeId role profileImage"
        ).sort({ createedAt: -1 });
        return allTask
    }
}


export default taskRepository