import React from "react";
import {
    Megaphone,
    Send,
    Clock3,
    Archive,
} from "lucide-react";
import AnnouncementStatCard from "./AnnouncementStatCard";


function AnnouncementStats() {
    const stats = [
        {
            title: "Total Announcements",
            value: "28",
            description: "↑ 12% from last month",
            icon: Megaphone,
            iconBg: "bg-violet-100",
            iconColor: "text-violet-600",
            descriptionColor: "text-green-600",
        },
        {
            title: "Published",
            value: "22",
            description: "↑ 8% from last month",
            icon: Send,
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
            descriptionColor: "text-green-600",
        },
        {
            title: "Scheduled",
            value: "03",
            description: "→ No change",
            icon: Clock3,
            iconBg: "bg-orange-100",
            iconColor: "text-orange-500",
            descriptionColor: "text-slate-500",
        },
        {
            title: "Archived",
            value: "03",
            description: "↓ 5% from last month",
            icon: Archive,
            iconBg: "bg-red-100",
            iconColor: "text-red-500",
            descriptionColor: "text-red-500",
        },
    ];

    return (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {stats.map((stat) => (
                <AnnouncementStatCard
                    key={stat.title}
                    {...stat}
                />
            ))}

        </div>
    );
}

export default AnnouncementStats;