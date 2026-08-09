
import { useSelector } from 'react-redux';
import useEmployeAttendanceHook from '../../hooks/useEmployeeAttendenceHook';
import ActivityTimeline from '../components/ActivityTimeline';
import Calender from '../components/Attendence/Calender';
import RecentAttendanceTable from '../components/RecentAttendanceTable';
import StatCard from '../components/StatCard'
import { BadgeCheck, Calendar, CalendarX2, Clock11 } from 'lucide-react';

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

function AttendancePage() {
    const { checkInTime } = useEmployeAttendanceHook.getTimeAndDate();

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
        <div className="space-y-6 p-4 bg-gray-50 min-h-screen">

            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <StatCard
                    icon={<Calendar size={28} />}
                    label="Present Days"
                    value={presentCount}
                    subText="This Month"
                    color="success"
                />

                <StatCard
                    icon={<CalendarX2 size={28} />}
                    label="Absent Days"
                    value={absentCount}
                    subText="This Month"
                    color="danger"
                />

                <StatCard
                    icon={<Clock11 size={28} />}
                    label="Late Arrivals"
                    value={lateCount}
                    subText="This Month"
                    color="warning"
                />

                <StatCard
                    icon={<BadgeCheck size={28} />}
                    label="Leave Balance"
                    value={22}
                    subText="Available"
                    color="primary"
                />
            </div>

            {/* Attendance + Calendar */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

                {/* Left */}
                <div className="bg-white rounded-2xl border p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Today&apos;s Attendance</h2>
                        <span className="text-sm text-gray-500">Aug 09, 2026</span>
                    </div>

                    <ActivityTimeline activities={activities} />

                    <button className="mt-6 w-full rounded-xl bg-indigo-600 py-3 text-white font-medium hover:bg-indigo-700">
                        Check Out
                    </button>
                </div>

                {/* Right */}
                <div className="bg-white rounded-2xl border p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Attendance Calendar</h2>
                        <button className="rounded-lg border px-3 py-1 text-sm">
                            Aug 2026
                        </button>
                    </div>

                    <Calender />
                </div>
            </div>

            {/* Recent Attendance */}
            <div className="bg-white rounded-2xl border p-5">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Recent Attendance</h2>

                    <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                        View All →
                    </button>
                </div>

                <RecentAttendanceTable />
            </div>
        </div>
    );
}

export default AttendancePage
