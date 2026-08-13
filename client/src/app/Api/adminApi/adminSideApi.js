import useAxiosInstence from "../../../shared/services/axiosInstence";


const adminSideApi = {

    getAllEmployee: async () => {
        let resp = await useAxiosInstence.get()
    }
}

export default adminSideApi