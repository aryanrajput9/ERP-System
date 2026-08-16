import useAxiosInstence from "../../../shared/services/axiosInstence";


const adminSideApi = {

    getAllEmployee: async () => {
        let resp = await useAxiosInstence.get("/employee/get-all-employe");
        return resp.data
    },
    getAllEmployeeAttendance: async () => {
        let resp = await useAxiosInstence.get("/attendence/all-attendence-allEmploye");
        return resp.data
    },
    createTask: async (input) => {
        const resp = await useAxiosInstence.post("/task/create-task", input);

        return resp.data.data
    },
    getAllTask: async () => {
        const resp = await useAxiosInstence.get("/task/get-all-task");
        return resp.data.data
    }
}

export default adminSideApi