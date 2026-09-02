import axios from "axios";



const useAxiosInstence = axios.create({
    baseURL: "https://erp-system-4-00v2.onrender.com//api",
    withCredentials: true
});

export default useAxiosInstence