import adminSideApi from "../../../../app/Api/adminApi/adminSideApi";



const useChatHook = {

    createChat: async (data) => {

        const resp = await adminSideApi.createChat(data);
        return resp.data.data

    },
    getMessage: async (id) => {
        const resp = await adminSideApi.getMessage(id);
        return resp
    }
}

export default useChatHook