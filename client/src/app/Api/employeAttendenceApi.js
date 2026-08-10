
import useAxiosInstence from "../../shared/services/axiosInstence";




const useEmployeAttendanceApi = {

    checkInApi: async (data) => {

        const resp = await useAxiosInstence.post("/attendence/", data);

        return resp.data.data
    },
    getTodayAttendence: async () => {
        const resp = await useAxiosInstence.get("/attendence/get-me");
        return resp.data.data
    },
    getAllAttendence: async () => {
        const resp = await useAxiosInstence.get("/attendence/get-All-attendence");
        return resp.data.data
    },
    checkOutApi: async (data) => {
        const resp = await useAxiosInstence.patch("/attendence/check-out", data);
        return resp.data.data
    }
};


export default useEmployeAttendanceApi