
import { Employee } from "../model/employe.model.js";


const authRepo = {

    create: async (data) => {
        const employe = await Employee.create(data);
        return employe
    },
    findByEmail: async (email) => {
        const employe = await Employee.findOne({ email });
        return employe
    },
    findById: async (userId) => {
        const employee = await Employee.findById(userId);
        return employee
    }

}


export default authRepo