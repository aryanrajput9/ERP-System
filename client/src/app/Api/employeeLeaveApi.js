import useAxiosInstence from "../../shared/services/axiosInstence";


const useEmployeeLeaveApi = {

    createLeave: async (data) => {

        const resp = await useAxiosInstence.post("/leave/take-leave", data);
        return resp.data.data
    },
    getLeave: async () => {
        const resp = await useAxiosInstence.get("/leave/get-leave");
        return resp.data.data
    }
}


export default useEmployeeLeaveApi