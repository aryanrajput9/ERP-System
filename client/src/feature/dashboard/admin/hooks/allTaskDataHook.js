import adminSideApi from "../../../../app/Api/adminApi/adminSideApi";



const taskApiDataHook = {
    createTask: async (input) => {
        const resp = await adminSideApi.createTask(input);
        return resp
    },
    getAllTask: async () => {
        const resp = await adminSideApi.getAllTask();
        return resp
    }
};


export default taskApiDataHook