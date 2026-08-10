import { useDispatch, useSelector } from "react-redux";
import ActivityTimeline from "../components/ActivityTimeline";
import AttendanceCard from "../components/AttendanceCard ";
import AttendanceOverview from "../components/AttendanceOverview";
import EmployeeProfileCard from "../components/EmployeeProfileCard";
import QuickActionCard from "../components/QuickActionCard";
import RecentAttendanceTable from "../components/RecentAttendanceTable";
import StatCard from "../components/StatCard";
import { setAttendanceHistory, setTodayAttendance } from '../../state/employeAttendenceSlice'
import {
    CalendarCheck2,
    CalendarX2,
    Clock3,
    CalendarPlus2,
    History,
    ReceiptText,
    UserCircle2,
    PartyPopper,
    RefreshCcw,
} from "lucide-react";
import useEmployeAttendanceHook from "../../hooks/useEmployeeAttendenceHook";
import { useEffect } from "react";


const actions = [
    {
        title: "Apply Leave",
        icon: <CalendarPlus2 size={34} />,
    },
    {
        title: "History",
        icon: <History size={34} />,
        active: true,
    },
    {
        title: "Payslip",
        icon: <ReceiptText size={34} />,
    },
    {
        title: "Profile",
        icon: <UserCircle2 size={34} />,
    },
    {
        title: "Holiday",
        icon: <PartyPopper size={34} />,
    },
    {
        title: "Update",
        icon: <RefreshCcw size={34} />,
    },
];

const activities = [
    {
        title: "Checked In",
        subtitle: "Web Portal",
        time: "09:12 AM",
        type: "completed",
    },
    {
        title: "Lunch Break",
        subtitle: "Away",
        time: "01:00 PM",
        type: "pending",
    },
    {
        title: "Back from Lunch",
        subtitle: "Web Portal",
        time: "01:35 PM",
        type: "completed",
    },
    {
        title: "Expected Out",
        subtitle: "End of Shift",
        time: "06:15 PM",
        type: "disabled",
        disabled: true,
    },
];


// const attendance = [
//     {
//         date: "Oct 23, 2024",
//         checkIn: "09:05 AM",
//         checkOut: "06:05 PM",
//         hours: "9h 00m",
//         status: "Present",
//     },
//     {
//         date: "Oct 22, 2024",
//         checkIn: "09:30 AM",
//         checkOut: "06:15 PM",
//         hours: "8h 45m",
//         status: "Late",
//     },
// ];



function Dashboard() {


    const dispatch = useDispatch();

    async function checkInData() {

        const resp = await useEmployeAttendanceHook.checkInHook({
            "remarks": "Checked in on time"
        });

        dispatch(setTodayAttendance(resp))

    };


    async function checkOutData() {

        const resp = await useEmployeAttendanceHook.checkOutHook({
            "remarks": "Checked out on time"
        });
        console.log(resp)
        dispatch(setTodayAttendance(resp))

    };






    useEffect(() => {
        async function fetchAttendance() {
            try {
                const today = await useEmployeAttendanceHook.getTodayAttendence();

                dispatch(setTodayAttendance(today));


                const allAttendence = await useEmployeAttendanceHook.getAllAttendence()


                dispatch(setAttendanceHistory(allAttendence))


            } catch (err) {
                console.log(err);
            }
        }

        fetchAttendance();
    }, [dispatch]);



    const { todayAttendance } = useSelector(
        (state) => state.attendance
    );


    const { checkInDate, checkInTime } = useEmployeAttendanceHook.getTimeAndDate(todayAttendance?.date, todayAttendance?.checkIn)



    const { employee } = useSelector((state) => state.employee)


    const { history } = useSelector((state) => state.attendance)

    const presentCount = history.filter(
        (item) => item.status === "Present"
    ).length;


    const absentCount = history.filter(
        (item) => item.status === "Absent"
    ).length;

    const lateCount = history.filter(
        (item) => item.status === "Late"
    ).length;


    return (
        <div className="grid grid-cols-12 gap-6 ">

            {/* Left Side */}
            <div className="col-span-9 flex flex-col gap-6">

                {/* Greeting */}
                <AttendanceCard todayAttendance={todayAttendance} checkInDate={checkInDate} checkInData={checkInData} checkOutData={checkOutData} />

                {/* Stats */}
                <div className="grid grid-cols-4 gap-6">
                    <StatCard
                        icon={<CalendarCheck2 size={30} />}
                        label="Present Days"
                        badge="Aug"
                        color="primary"
                        value={presentCount}
                    />

                    <StatCard
                        icon={<CalendarX2 size={30} />}
                        value={absentCount}
                        label="Absent"
                        color="danger"

                    />

                    <StatCard
                        icon={<Clock3 size={30} />}
                        value={lateCount}
                        label="Late"
                        color="warning"

                    />
                </div>

                {/* Attendance + Timeline */}
                <div className="grid grid-cols-2 gap-6">
                    <AttendanceOverview todayAttendance={todayAttendance} />
                    <ActivityTimeline activities={activities} checkInTime={checkInTime} />
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-6 gap-5">
                    {actions.map((item, index) => (
                        <QuickActionCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            active={item.active}
                        />
                    ))}
                </div>

                {/* Table */}
                <RecentAttendanceTable />
            </div>

            {/* Right Side */}
            <div className="col-span-3 flex flex-col gap-6">

                <EmployeeProfileCard
                    employee={employee}
                />

                {/* TODO */}
                {/* <TaskCard /> */}

                {/* TODO */}
                {/* <MeetingCard /> */}

            </div>

        </div>
    );
}

export default Dashboard;


