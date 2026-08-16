
import adminSideApi from "../../../../app/Api/adminApi/adminSideApi";



const useAllEmployeeData = {


    getAllEmployee: async () => {
        const resp = await adminSideApi.getAllEmployee();
        return resp
    },
    getAllEmployeeAttendance: async () => {
        const resp = await adminSideApi.getAllEmployeeAttendance()
        return resp
    },


}


export default useAllEmployeeData