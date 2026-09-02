import { io } from 'socket.io-client';


const socketClient = io("https://erp-system-4-00v2.onrender.com", {
    withCredentials: true
})


export default socketClient