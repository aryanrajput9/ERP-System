
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
        <div className="space-y-6 p-4 bg-[var(--background)] min-h-screen">

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
                <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                            Today&apos;s Attendance
                        </h2>

                        <span className="text-sm text-[var(--text-secondary)]">
                            {new Date().toLocaleDateString("en-US", {
                                month: "short",
                                day: "2-digit",
                                year: "numeric",
                            })}
                        </span>
                    </div>

                    <ActivityTimeline activities={activities} />

                    <button className="mt-6 w-full rounded-xl bg-[var(--primary)] py-3 text-[var(--text-white)] font-medium hover:opacity-90 transition-opacity">
                        Check Out
                    </button>
                </div>

                {/* Right */}
                <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                            Attendance Calendar
                        </h2>

                        <button className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-sm text-[var(--text-primary)] hover:bg-[var(--hover-bg)] transition-colors">
                            {new Date().toLocaleDateString("en-US", {
                                month: "short",
                                year: "numeric",
                            })}
                        </button>
                    </div>

                    <Calender />
                </div>
            </div>

            {/* Recent Attendance */}
            <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                        Recent Attendance
                    </h2>

                    <button className="text-sm font-medium text-[var(--primary)] hover:opacity-80 transition-opacity">
                        View All →
                    </button>
                </div>

                <RecentAttendanceTable />
            </div>
        </div>
    );
}

export default AttendancePage
