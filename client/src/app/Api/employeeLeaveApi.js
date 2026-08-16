import useAxiosInstence from "../../shared/services/axiosInstence";


const useEmployeeLeaveApi = {

    createLeave: async (data) => {

        const resp = await useAxiosInstence.post("/leave/take-leave", data);
        return resp.data.data
    },
    getLeave: async () => {
        const resp = await useAxiosInstence.get("/leave/get-leave");
        return resp.data.data
    },
    getAllLeave: async () => {
        const allleave = await useAxiosInstence.get("/leave/all-leave");
        return allleave.data.data
    },
    approveLeaveById: async (id) => {
        const approveLeave = await useAxiosInstence.patch(`/leave/approveleave/${id}`);
        return approveLeave
    },
    rejectLeaveById: async (id, data) => {
        const approveLeave = await useAxiosInstence.patch(`/leave/rejectleave/${id}`, data);
        return approveLeave
    }
}


export default useEmployeeLeaveApi