import { useSelector } from "react-redux";
import useEmployeAttendanceHook from "../../hooks/useEmployeeAttendenceHook";

const statusStyles = {
    Present: {
        color: "var(--success)",
        background: "var(--success-bg)",
    },
    Late: {
        color: "var(--danger)",
        background: "var(--danger-bg)",
    },
    Absent: {
        color: "var(--danger)",
        background: "var(--danger-bg)",
    },
    HalfDay: {
        color: "var(--warning)",
        background: "var(--warning-bg)",
    },
};

const RecentAttendanceTable = () => {

    const { history } = useSelector((state) => state.attendance)

    const { checkInDate, checkInTime } = useEmployeAttendanceHook.getTimeAndDate()

    return (
        <div
            className="rounded-[var(--radius)] border bg-[var(--card)] p-8"
            style={{
                borderColor: "var(--border)",
                boxShadow: "var(--shadow-sm)",
            }}
        >
            <h2 className="mb-8 text-3xl font-bold text-[var(--text-primary)]">
                Recent Attendance
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr
                            className="text-left"
                            style={{
                                borderBottom: "1px solid var(--border)",
                            }}
                        >
                            <th className="pb-5 text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                                Date
                            </th>

                            <th className="pb-5 text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                                Check-In
                            </th>

                            <th className="pb-5 text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                                Check-Out
                            </th>

                            <th className="pb-5 text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                                Hours
                            </th>

                            <th className="pb-5 text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                                Status
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {history.map((item, index) => (
                            <tr
                                key={index}
                                className="transition-colors duration-300 hover:bg-[var(--hover-bg)]"
                                style={{
                                    borderBottom:
                                        index !== history.length - 1
                                            ? "1px solid var(--border)"
                                            : "none",
                                }}
                            >
                                <td className="py-5 font-medium text-[var(--text-primary)]">
                                    {checkInDate(item.date)}
                                </td>

                                <td className="py-5 text-[var(--text-primary)]">
                                    {checkInTime(item.checkIn)}
                                </td>

                                <td className="py-5 text-[var(--text-primary)]">
                                    {checkInTime(item.checkOut)}
                                </td>

                                <td className="py-5 text-[var(--text-primary)]">
                                    {useEmployeAttendanceHook.formatWorkingHours(item.workingHours)}
                                </td>

                                <td className="py-5">
                                    <span
                                        className="rounded-full px-4 py-1.5 text-sm font-semibold"
                                        style={{
                                            color: statusStyles[item.status].color,
                                            background: statusStyles[item.status].background,
                                        }}
                                    >
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentAttendanceTable;