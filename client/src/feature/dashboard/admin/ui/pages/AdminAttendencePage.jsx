import { Calendar, Search } from "lucide-react";
import { useSelector } from "react-redux";



export default function AdminAttendancePage() {

    const { allEmployeeAttendance } = useSelector((state) => state.admin);


    const presentCount = allEmployeeAttendance.filter(
        (emp) => emp.todayAttendance?.[0]?.status === "Present"
    ).length;

    const lateCount = allEmployeeAttendance.filter(
        (emp) => emp.todayAttendance?.[0]?.status === "Late"
    ).length;

    const absentCount = allEmployeeAttendance.filter(
        (emp) => emp.todayAttendance?.length === 0 ||
            emp.todayAttendance?.[0]?.status === "Absent"
    ).length;

    const leaveCount = allEmployeeAttendance.filter(
        (emp) => emp.todayAttendance?.[0]?.status === "Leave"
    ).length;


    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1
                        className="text-2xl font-bold"
                        style={{ color: "var(--text-primary)" }}
                    >
                        Attendance
                    </h1>

                    <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Manage employee attendance records.
                    </p>
                </div>

                <button
                    className="flex items-center gap-2 rounded-xl border px-4 py-2 text-sm shadow-sm"
                    style={{
                        backgroundColor: "var(--card)",
                        borderColor: "var(--border)",
                        color: "var(--text-primary)",
                    }}
                >
                    <Calendar size={16} />
                    Today
                </button>
            </div>

            {/* Stats */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {/* Present */}
                <div
                    className="rounded-2xl border p-5 shadow-sm"
                    style={{
                        backgroundColor: "var(--card)",
                        borderColor: "var(--border)",
                    }}
                >
                    <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Present
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-green-600">{presentCount}</h3>
                </div>

                {/* Late */}
                <div
                    className="rounded-2xl border p-5 shadow-sm"
                    style={{
                        backgroundColor: "var(--card)",
                        borderColor: "var(--border)",
                    }}
                >
                    <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Late
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-orange-600">{lateCount}</h3>
                </div>

                {/* Absent */}
                <div
                    className="rounded-2xl border p-5 shadow-sm"
                    style={{
                        backgroundColor: "var(--card)",
                        borderColor: "var(--border)",
                    }}
                >
                    <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Absent
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-red-600">{absentCount}</h3>
                </div>

                {/* On Leave */}
                <div
                    className="rounded-2xl border p-5 shadow-sm"
                    style={{
                        backgroundColor: "var(--card)",
                        borderColor: "var(--border)",
                    }}
                >
                    <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        On Leave
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-violet-600">{leaveCount}</h3>
                </div>
            </div>



            {/* Filters */}
            <div
                className="flex flex-wrap items-center gap-4 rounded-2xl border p-4 shadow-sm"
                style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                }}
            >
                {/* Search */}
                <div
                    className="flex min-w-[280px] flex-1 items-center gap-3 rounded-xl border px-4 py-3"
                    style={{
                        borderColor: "var(--border)",
                        backgroundColor: "var(--input-bg)",
                    }}
                >
                    <Search size={18} style={{ color: "var(--text-muted)" }} />

                    <input
                        type="text"
                        placeholder="Search employee..."
                        className="w-full bg-transparent text-sm focus:outline-none"
                        style={{
                            color: "var(--text-primary)",
                        }}
                    />
                </div>

                {/* Date */}
                <input
                    type="date"
                    defaultValue={new Date().toISOString().split("T")[0]}
                    className="rounded-xl border px-4 py-3 text-sm focus:outline-none"
                    style={{
                        borderColor: "var(--border)",
                        backgroundColor: "var(--input-bg)",
                        color: "var(--text-primary)",
                    }}
                />
            </div>

            {/* Table */}
            <div
                className="overflow-hidden rounded-2xl border shadow-sm"
                style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                }}
            >
                {/* Table Header */}
                <div
                    className="grid grid-cols-[2fr_1.2fr_1fr_1fr_1fr] gap-4 border-b px-6 py-4 text-sm font-medium"
                    style={{
                        backgroundColor: "var(--surface-2)",
                        borderColor: "var(--border)",
                        color: "var(--text-muted)",
                    }}
                >
                    <p>Employee</p>
                    <p>Department</p>
                    <p>Check In</p>
                    <p>Check Out</p>
                    <p>Status</p>
                </div>

                {/* Rows */}
                <div
                    className="divide-y"
                    style={{ borderColor: "var(--border)" }}
                >
                    {allEmployeeAttendance.map((emp) => (

                        <div
                            key={emp._id}
                            className="grid grid-cols-[2fr_1.2fr_1fr_1fr_1fr] items-center gap-4 px-6 py-4"
                        >
                            {/* Name */}
                            <p
                                className="font-medium"
                                style={{ color: "var(--text-primary)" }}
                            >
                                {emp?.firstName}
                            </p>

                            {/* Department */}
                            <p
                                className="text-sm"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                {emp?.department || "Not Assign"}
                            </p>

                            {/* Check In */}
                            <p
                                className="text-sm"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                {!emp.todayAttendance.length || !emp?.todayAttendance[0]?.checkIn ? "not checkIn" : new Date(emp?.todayAttendance[0]?.checkIn).toLocaleDateString("en-IN", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric"
                                })}
                            </p>

                            {/* Check Out */}
                            <p
                                className="text-sm"
                                style={{ color: "var(--text-secondary)" }}
                            >

                                {!emp?.todayAttendance?.length || !emp?.todayAttendance[0]?.checkOut
                                    ? "Not Checked Out"
                                    : new Date(emp.todayAttendance[0].checkOut).toLocaleDateString("en-IN", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                            </p>

                            {/* Status */}
                            <div>
                                <span
                                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${emp?.todayAttendance[0]?.status === "Present"
                                        ? "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400"
                                        : emp?.status === "Late"
                                            ? "bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-400"
                                            : emp.status === "Absent"
                                                ? "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400"
                                                : "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-400"
                                        }`}
                                >
                                    {emp.todayAttendance.length === 0 ? "Leave" : emp?.todayAttendance[0]?.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}