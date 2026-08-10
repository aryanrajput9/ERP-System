
import useEmployeeLeaveApi from "../../../../app/Api/employeeLeaveApi";



const useEmployeeLeaveHook = {


    createLeaveHook: async (data) => {

        const resp = await useEmployeeLeaveApi.createLeave(data);
        return resp
    },
    getLeaveHook: async () => {
        const resp = await useEmployeeLeaveApi.getLeave()
        return resp
    }
}

export default useEmployeeLeaveHook