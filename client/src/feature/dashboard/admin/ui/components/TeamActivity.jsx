const team = [
    {
        name: "Amit Sharma",
        role: "UI/UX Designer",
        assigned: 6,
        completed: 4,
        pending: 2,
        progress: 66,
        avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
        name: "Priya Singh",
        role: "Frontend Developer",
        assigned: 5,
        completed: 3,
        pending: 2,
        progress: 60,
        avatar: "https://i.pravatar.cc/100?img=32",
    },
    {
        name: "Rohit Kumar",
        role: "Backend Developer",
        assigned: 6,
        completed: 5,
        pending: 1,
        progress: 83,
        avatar: "https://i.pravatar.cc/100?img=15",
    },
    {
        name: "Neha Joshi",
        role: "HR Executive",
        assigned: 4,
        completed: 3,
        pending: 1,
        progress: 75,
        avatar: "https://i.pravatar.cc/100?img=44",
    },
    {
        name: "Suresh Patel",
        role: "QA Engineer",
        assigned: 7,
        completed: 3,
        pending: 4,
        progress: 43,
        avatar: "https://i.pravatar.cc/100?img=18",
    },
];

export default function TeamActivity() {
    return (
        <div
            className="w-full rounded-2xl border p-4 shadow-sm"
            style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
            }}
        >
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2
                    className="text-base font-semibold"
                    style={{ color: "var(--text-primary)" }}
                >
                    My Team Activity
                </h2>

                <button
                    className="text-xs font-medium transition"
                    style={{ color: "var(--primary)" }}
                >
                    View All
                </button>
            </div>

            {/* Table Header */}
            <div
                className="mt-4 grid grid-cols-[1.8fr_0.7fr_0.7fr_0.7fr_1fr] items-center border-b pb-2 text-[11px] font-medium"
                style={{
                    color: "var(--text-muted)",
                    borderColor: "var(--border)",
                }}
            >
                <p>Employee</p>
                <p className="text-center">Assigned</p>
                <p className="text-center">Done</p>
                <p className="text-center">Pending</p>
                <p className="text-center">Progress</p>
            </div>

            {/* Rows */}
            <div
                className="divide-y"
                style={{ borderColor: "var(--border)" }}
            >
                {team.map((member) => (
                    <div
                        key={member.name}
                        className="grid grid-cols-[1.8fr_0.7fr_0.7fr_0.7fr_1fr] items-center py-3"
                    >
                        {/* Employee */}
                        <div className="flex items-center gap-3">
                            <img
                                src={member.avatar}
                                alt={member.name}
                                className="h-9 w-9 rounded-full object-cover"
                            />

                            <div className="min-w-0">
                                <p
                                    className="truncate text-sm font-medium"
                                    style={{ color: "var(--text-primary)" }}
                                >
                                    {member.name}
                                </p>

                                <p
                                    className="truncate text-[11px]"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {member.role}
                                </p>
                            </div>
                        </div>

                        {/* Assigned */}
                        <p
                            className="text-center text-sm"
                            style={{ color: "var(--text-primary)" }}
                        >
                            {member.assigned}
                        </p>

                        {/* Completed */}
                        <p className="text-center text-sm font-semibold text-green-600 dark:text-green-400">
                            {member.completed}
                        </p>

                        {/* Pending */}
                        <p className="text-center text-sm font-semibold text-orange-600 dark:text-orange-400">
                            {member.pending}
                        </p>

                        {/* Progress */}
                        <div className="flex flex-col items-center gap-1">
                            <span
                                className="text-xs font-semibold"
                                style={{ color: "var(--text-primary)" }}
                            >
                                {member.progress}%
                            </span>

                            <div
                                className="h-1.5 w-full max-w-[72px] overflow-hidden rounded-full"
                                style={{ backgroundColor: "var(--surface-2)" }}
                            >
                                <div
                                    className="h-full rounded-full"
                                    style={{
                                        width: `${member.progress}%`,
                                        backgroundColor: "var(--primary)",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}