
import useEmployeAttendanceApi from "../../../../app/Api/employeAttendenceApi";


const useEmployeAttendanceHook = {


    checkInHook: async (data) => {
        const resp = await useEmployeAttendanceApi.checkInApi(data);
        return resp
    },
    getTodayAttendence: async () => {
        const resp = await useEmployeAttendanceApi.getTodayAttendence();
        return resp
    },

    getTimeAndDate: () => {
        const checkInDate = (date) => {
            let newDate = new Date(date).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            });

            return newDate
        }

        const checkInTime = (time) => {

            if (time === null) return "__:__";

            let newTime = new Date(time).toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            })
            return newTime
        };

        return {
            checkInDate, checkInTime
        }
    },
    getAllAttendence: async () => {
        const resp = await useEmployeAttendanceApi.getAllAttendence();

        return resp
    },
    formatWorkingHours: (hours) => {
        if (hours == null) return "--";

        const totalMinutes = Math.round(hours * 60);

        const h = Math.floor(totalMinutes / 60);
        const m = totalMinutes % 60;

        return `${h}h ${m}m`;
    },
    circleTime: (hours) => {

        if (!hours) return "__:__";

        const out = new Date(hours);

        out.setHours(out.getHours() + 9);

        return out.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        })


    },
    currentWorkingHours: (checkIn) => {
        if (!checkIn) return "0h 0m";

        const now = new Date();
        const start = new Date(checkIn);

        const diff = now - start;

        const totalMinutes = Math.floor(diff / (1000 * 60));

        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        return `${hours}h ${minutes}m`;
    }
}


export default useEmployeAttendanceHook