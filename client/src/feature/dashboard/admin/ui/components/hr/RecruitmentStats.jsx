import React from "react";
import {
    BriefcaseBusiness,
    Users,
    CalendarDays,
    UserCheck,
} from "lucide-react";
import StatCard from "./ReStatCard";


function RecruitmentStats() {
    const stats = [
        {
            title: "Open Positions",
            value: "12",
            description: "+3 this month",
            icon: BriefcaseBusiness,
            iconBg: "bg-violet-100",
            iconColor: "text-violet-600",
            descriptionColor: "text-green-600",
        },
        {
            title: "Total Applicants",
            value: "286",
            description: "+18.4% this month",
            icon: Users,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
            descriptionColor: "text-green-600",
        },
        {
            title: "Interviews",
            value: "24",
            description: "8 scheduled today",
            icon: CalendarDays,
            iconBg: "bg-orange-100",
            iconColor: "text-orange-500",
            descriptionColor: "text-orange-500",
        },
        {
            title: "Hired",
            value: "18",
            description: "+6 this month",
            icon: UserCheck,
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
            descriptionColor: "text-green-600",
        },
    ];

    return (
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
                <StatCard
                    key={item.title}
                    {...item}
                />
            ))}
        </div>
    );
}

export default RecruitmentStats;