import React from "react";
import {
    Users,
    UserCheck,
    UserX,
    CalendarPlus,
    LogOut,
} from "lucide-react";

import ReportStatCard from "./ReportStatCard";

function ReportStats() {
    const stats = [
        {
            title: "Total Employees",
            value: "256",
            description: "↑ 8.5% vs last month",
            icon: Users,
            iconBg: "bg-violet-100",
            iconColor: "text-violet-600",
            descriptionColor: "text-green-600",
        },
        {
            title: "Active Employees",
            value: "230",
            description: "↑ 6.3% vs last month",
            icon: UserCheck,
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
            descriptionColor: "text-green-600",
        },
        {
            title: "Inactive Employees",
            value: "26",
            description: "↓ 2.1% vs last month",
            icon: UserX,
            iconBg: "bg-red-100",
            iconColor: "text-red-500",
            descriptionColor: "text-red-500",
        },
        {
            title: "New Joiners",
            value: "18",
            description: "↑ 12.5% vs last month",
            icon: CalendarPlus,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
            descriptionColor: "text-green-600",
        },
        {
            title: "Exit This Month",
            value: "6",
            description: "↓ 14.3% vs last month",
            icon: LogOut,
            iconBg: "bg-orange-100",
            iconColor: "text-orange-500",
            descriptionColor: "text-red-500",
        },
    ];

    return (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

            {stats.map((stat) => (
                <ReportStatCard
                    key={stat.title}
                    {...stat}
                />
            ))}

        </div>
    );
}

export default ReportStats;