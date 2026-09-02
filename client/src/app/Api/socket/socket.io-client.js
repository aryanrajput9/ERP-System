import { io } from 'socket.io-client';


const socketClient = io("https://erp-system-git-master-aryanrajput9s-projects.vercel.app", {
    withCredentials: true
})


export default socketClient