import { CalendarDays, UserCheck, Users, UserX } from "lucide-react";
import { useSelector } from "react-redux";



export default function StatsCards() {

    const { allEmploye } = useSelector((state) => state.admin);

    const totalEmployees = allEmploye?.length || 0;

    const presentToday =
        allEmploye?.filter((emp) => emp.attendance === "present").length || 0;

    const absentToday =
        allEmploye?.filter((emp) => emp.attendance === "absent").length || 0;

    const onLeave =
        allEmploye?.filter((emp) => emp.attendance === "leave").length || 0;


    const stats = [
        {
            title: "Total Employees",
            value: totalEmployees,
            description: "Total team members",
            icon: <Users size={22} />,
            iconBg: "bg-violet-100 dark:bg-violet-500/15",
            iconColor: "text-violet-600 dark:text-violet-400",
        },
        {
            title: "Present Today",
            value: presentToday,
            description: "Employees present today",
            icon: <UserCheck size={22} />,
            iconBg: "bg-green-100 dark:bg-green-500/15",
            iconColor: "text-green-600 dark:text-green-400",
        },
        {
            title: "Absent Today",
            value: absentToday,
            description: "Employees absent today",
            icon: <UserX size={22} />,
            iconBg: "bg-red-100 dark:bg-red-500/15",
            iconColor: "text-red-600 dark:text-red-400",
        },
        {
            title: "On Leave",
            value: onLeave,
            description: "Employees on leave today",
            icon: <CalendarDays size={22} />,
            iconBg: "bg-orange-100 dark:bg-orange-500/15",
            iconColor: "text-orange-600 dark:text-orange-400",
        },
    ];


    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
                <div
                    key={item.title}
                    className="
                        group relative overflow-hidden rounded-2xl
                        border p-5
                        shadow-sm
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:shadow-lg
                    "
                    style={{
                        backgroundColor: "var(--card)",
                        borderColor: "var(--border)",
                    }}
                >
                    {/* Top */}
                    <div className="flex items-center justify-between">
                        <div
                            className={`
                                flex h-11 w-11 items-center justify-center
                                rounded-xl
                                ${item.iconBg}
                                ${item.iconColor}
                            `}
                        >
                            {item.icon}
                        </div>

                        <span
                            className="text-xs font-medium"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            Today
                        </span>
                    </div>

                    {/* Content */}
                    <div className="mt-5">
                        <p
                            className="text-sm font-medium"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            {item.title}
                        </p>

                        <div className="mt-1 flex items-end gap-2">
                            <h3
                                className="text-3xl font-bold tracking-tight"
                                style={{ color: "var(--text-primary)" }}
                            >
                                {item.value}
                            </h3>

                            {item.title !== "Total Employees" && (
                                <span
                                    className="mb-1 text-xs"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    employees
                                </span>
                            )}
                        </div>

                        <p
                            className="mt-2 text-xs"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            {item.description}
                        </p>
                    </div>

                    {/* Bottom accent */}
                    <div
                        className={`
                            absolute bottom-0 left-0 h-1 w-full
                            ${item.iconBg}
                            transition-all duration-300
                            group-hover:h-1.5
                        `}
                    />
                </div>
            ))}
        </div>
    );
}