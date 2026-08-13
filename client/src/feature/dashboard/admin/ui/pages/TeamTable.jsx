import { MoreVertical } from "lucide-react";

const employees = [
    {
        name: "Amit Sharma",
        email: "amit.sharma@example.com",
        role: "UI/UX Designer",
        department: "Design",
        joined: "May 10, 2024",
        avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
        name: "Priya Singh",
        email: "priya.singh@example.com",
        role: "Frontend Developer",
        department: "Development",
        joined: "Jun 15, 2024",
        avatar: "https://i.pravatar.cc/100?img=32",
    },
    {
        name: "Rohit Kumar",
        email: "rohit.kumar@example.com",
        role: "Backend Developer",
        department: "Development",
        joined: "Apr 22, 2024",
        avatar: "https://i.pravatar.cc/100?img=15",
    },
    {
        name: "Neha Joshi",
        email: "neha.joshi@example.com",
        role: "HR Executive",
        department: "Human Resources",
        joined: "Jul 05, 2024",
        avatar: "https://i.pravatar.cc/100?img=44",
    },
];

export default function TeamTable() {
    return (
        <div
            className="overflow-hidden rounded-2xl border shadow-sm"
            style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
            }}
        >
            {/* Header */}
            <div
                className="grid grid-cols-[2fr_1.5fr_1.2fr_1fr_1fr_80px] gap-4 border-b px-6 py-4 text-sm font-medium"
                style={{
                    backgroundColor: "var(--surface-2)",
                    borderColor: "var(--border)",
                    color: "var(--text-muted)",
                }}
            >
                <p>Employee</p>
                <p>Role</p>
                <p>Department</p>
                <p>Status</p>
                <p>Joined On</p>
                <p className="text-center">Action</p>
            </div>

            {/* Rows */}
            <div className="divide-y" style={{ borderColor: "var(--border)" }}>
                {employees.map((emp) => (
                    <div
                        key={emp.email}
                        className="grid grid-cols-[2fr_1.5fr_1.2fr_1fr_1fr_80px] items-center gap-4 px-6 py-4"
                    >
                        {/* Employee */}
                        <div className="flex items-center gap-3">
                            <img
                                src={emp.avatar}
                                alt={emp.name}
                                className="h-10 w-10 rounded-full object-cover"
                            />

                            <div>
                                <p
                                    className="text-sm font-medium"
                                    style={{ color: "var(--text-primary)" }}
                                >
                                    {emp.name}
                                </p>

                                <p
                                    className="text-xs"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {emp.email}
                                </p>
                            </div>
                        </div>

                        {/* Role */}
                        <p
                            className="text-sm"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            {emp.role}
                        </p>

                        {/* Department */}
                        <p
                            className="text-sm"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            {emp.department}
                        </p>

                        {/* Status */}
                        <div>
                            <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-500/15 dark:text-green-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                Active
                            </span>
                        </div>

                        {/* Joined */}
                        <p
                            className="text-sm"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            {emp.joined}
                        </p>

                        {/* Action */}
                        <div className="flex justify-center">
                            <button
                                className="rounded-lg p-2 transition"
                                style={{ color: "var(--text-muted)" }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "var(--hover-bg)";
                                    e.currentTarget.style.color = "var(--hover-text)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "transparent";
                                    e.currentTarget.style.color = "var(--text-muted)";
                                }}
                            >
                                <MoreVertical size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}