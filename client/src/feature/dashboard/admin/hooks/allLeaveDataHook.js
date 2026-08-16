import useEmployeeLeaveApi from "../../../../app/Api/employeeLeaveApi";


const allLeaveDataHook = {

    getAllLeave: async () => {
        const allleave = await useEmployeeLeaveApi.getAllLeave();
        return allleave
    },
    approveLeave: async (id) => {
        const approve = await useEmployeeLeaveApi.approveLeaveById(id);
        return approve
    },
    rejectLeave: async (id, data) => {
        const reject = await useEmployeeLeaveApi.rejectLeaveById(id, data);
        return reject
    }

}


export default allLeaveDataHook