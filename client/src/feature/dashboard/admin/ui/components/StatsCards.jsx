import {
    Users,
    CheckSquare,
    CheckCircle2,
    Clock3,
    CalendarDays,
} from "lucide-react";

const stats = [
    {
        title: "Total Employees",
        value: 42,
        change: "↑ 6% vs last month",
        icon: <Users size={22} />,
        iconBg: "bg-violet-100 dark:bg-violet-500/15",
        iconColor: "text-violet-600 dark:text-violet-400",
        changeColor: "text-green-600 dark:text-green-400",
        lineColor: "#8B5CF6",
    },
    {
        title: "Tasks Assigned",
        value: 28,
        change: "↑ 12% vs last week",
        icon: <CheckSquare size={22} />,
        iconBg: "bg-blue-100 dark:bg-blue-500/15",
        iconColor: "text-blue-600 dark:text-blue-400",
        changeColor: "text-green-600 dark:text-green-400",
        lineColor: "#2563EB",
    },
    {
        title: "Tasks Completed",
        value: 18,
        change: "↑ 18% vs last week",
        icon: <CheckCircle2 size={22} />,
        iconBg: "bg-green-100 dark:bg-green-500/15",
        iconColor: "text-green-600 dark:text-green-400",
        changeColor: "text-green-600 dark:text-green-400",
        lineColor: "#16A34A",
    },
    {
        title: "Pending Tasks",
        value: 10,
        change: "↓ 8% vs last week",
        icon: <Clock3 size={22} />,
        iconBg: "bg-orange-100 dark:bg-orange-500/15",
        iconColor: "text-orange-600 dark:text-orange-400",
        changeColor: "text-red-600 dark:text-red-400",
        lineColor: "#EA580C",
    },
    {
        title: "On Leave Today",
        value: 3,
        change: "– No change",
        icon: <CalendarDays size={22} />,
        iconBg: "bg-pink-100 dark:bg-pink-500/15",
        iconColor: "text-pink-600 dark:text-pink-400",
        changeColor: "text-gray-500 dark:text-gray-400",
        lineColor: "#DB2777",
    },
];

function Wave({ color }) {
    return (
        <svg viewBox="0 0 120 24" className="h-8 w-full">
            <path
                d="M0 16 C10 2 20 22 30 10 C40 -2 50 22 60 12 C70 2 80 22 90 10 C100 0 110 18 120 8"
                fill="none"
                stroke={color}
                strokeWidth="1.8"
                strokeLinecap="round"
            />
        </svg>
    );
}

export default function StatsCards() {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {stats.map((item) => (
                <div
                    key={item.title}
                    className="rounded-2xl border p-5 shadow-sm"
                    style={{
                        backgroundColor: "var(--card)",
                        borderColor: "var(--border)",
                    }}
                >
                    <div className="flex items-start justify-between">
                        <div
                            className={`rounded-xl p-3 ${item.iconBg} ${item.iconColor}`}
                        >
                            {item.icon}
                        </div>

                        <div className="text-right">
                            <p
                                className="text-sm"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                {item.title}
                            </p>

                            <h3
                                className="mt-1 text-3xl font-bold"
                                style={{ color: "var(--text-primary)" }}
                            >
                                {item.value}
                            </h3>
                        </div>
                    </div>

                    <p className={`mt-4 text-sm font-medium ${item.changeColor}`}>
                        {item.change}
                    </p>

                    <div className="mt-4">
                        <Wave color={item.lineColor} />
                    </div>
                </div>
            ))}
        </div>
    );
}