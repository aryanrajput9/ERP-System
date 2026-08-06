import axios from "axios";



const useAxiosInstence = axios.create({
    baseURL: "/api",
    withCredentials: true
});

export default useAxiosInstence