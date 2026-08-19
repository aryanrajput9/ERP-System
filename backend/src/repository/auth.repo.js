
import { Employee } from "../model/employe.model.js";


const authRepo = {

    create: async (data) => {
        // Persist a new employee through the Mongoose model and return the created document.
        const employe = await Employee.create(data);
        return employe
    },
    findByEmail: async (email) => {
        // Password is normally hidden by the schema, so include it only for authentication.
        const employe = await Employee.findOne({ email }).select("+password");
        return employe
    },
    findById: async (userId) => {
        // Resolve the token's user ID to the current employee record for protected requests.
        const employee = await Employee.findById(userId);
        return employee
    }

}


export default authRepo