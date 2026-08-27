import React from "react";
import {
    TrendingUp,
    Users,
    Star,
    Target,
} from "lucide-react";
import PerformanceStatCard from "./PerformanceStatCard";


function PerformanceStats() {
    const stats = [
        {
            title: "Average Performance Score",
            value: "4.2",
            suffix: "/ 5",
            description: "+0.3 from last cycle",
            icon: TrendingUp,
            iconBg: "bg-violet-100",
            iconColor: "text-violet-600",
        },
        {
            title: "Reviews Completed",
            value: "68%",
            description: "+12% from last cycle",
            icon: Users,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
        },
        {
            title: "High Performers",
            value: "46",
            description: "+8 from last cycle",
            icon: Star,
            iconBg: "bg-orange-100",
            iconColor: "text-orange-500",
        },
        {
            title: "Goals Achieved",
            value: "72%",
            description: "+10% from last cycle",
            icon: Target,
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
        },
    ];

    return (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {stats.map((stat) => (
                <PerformanceStatCard
                    key={stat.title}
                    {...stat}
                />
            ))}

        </div>
    );
}

export default PerformanceStats;