
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
    setDepartmentHook: async (id, department) => {
        const resp = await adminSideApi.setDepartment(id, department);
        return resp
    },
    getAllEmployeeAttendanceHistory: async () => {
        const resp = await adminSideApi.getAllAttendanceHistory();
        return resp.data
    }


}


export default useAllEmployeeData