import React from "react";
import {
    Building2,
    Users,
    UserRoundCheck,
    LayoutGrid,
} from "lucide-react";
import DepartmentStatCard from "./DepartmentStatCard";


function DepartmentStats() {
    const stats = [
        {
            title: "Total Departments",
            value: "12",
            description: "+2 this month",
            icon: Building2,
            iconBg: "bg-violet-100",
            iconColor: "text-violet-600",
            descriptionColor: "text-green-600",
        },
        {
            title: "Total Employees",
            value: "256",
            description: "+18 this month",
            icon: Users,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
            descriptionColor: "text-green-600",
        },
        {
            title: "Average Team Size",
            value: "21.3",
            description: "+2.4% this month",
            icon: UserRoundCheck,
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
            descriptionColor: "text-green-600",
        },
        {
            title: "Active Departments",
            value: "10",
            description: "83.33% of total",
            icon: LayoutGrid,
            iconBg: "bg-orange-100",
            iconColor: "text-orange-500",
            descriptionColor: "text-slate-500",
        },
    ];

    return (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
                <DepartmentStatCard
                    key={stat.title}
                    {...stat}
                />
            ))}
        </div>
    );
}

export default DepartmentStats;