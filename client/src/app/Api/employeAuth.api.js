
import useAxiosInstence from "../../shared/services/axiosInstence";
import { store } from '../../app/store'
import axios from "axios";
import { setAccessToken } from "../../feature/auth/employee/state/employeeSlice";



useAxiosInstence.interceptors.request.use(
    (config) => {

        const token = store.getState().employee.accessToken;

        if (token) {
            config.headers.Authorization = `Bearer  ${token}`
        }

        return config

    }
)


useAxiosInstence.interceptors.response.use(

    (response) => response,

    async (error) => {

        const orignalRequest = error.config;

        if (error.response.status === 401 && !orignalRequest._retry) {
            orignalRequest._retry = true;


            const response = await useAxiosInstence.get("/employee/refresh-token");

            const accessToken = response.data.data.accessToken;

            store.dispatch(setAccessToken(accessToken));

            orignalRequest.headers.Authorization = `Bearer ${accessToken}`;

            return useAxiosInstence(orignalRequest);
        }

        return Promise.reject(error)
    },


)

const employeeApi = {

    loginApi: async (data) => {

        const resp = await useAxiosInstence.post("/employee/login-employee", data);

        return resp.data.data
    },
    getMe: async () => {
        const resp = await useAxiosInstence.get("/employee/get-cuurent-employe");
        return resp.data.data
    }
};



export default employeeApi