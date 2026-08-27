import React from "react";
import {
    Building2,
    Users,
    UserPlus,
    Settings2,
} from "lucide-react";

const activities = [
    {
        title: 'New department "Product" created',
        by: "Rahul Sharma",
        time: "2h ago",
        icon: Building2,
        bg: "bg-violet-100",
        color: "text-violet-600",
    },
    {
        title: 'Department "Design" updated',
        by: "Neha Patel",
        time: "5h ago",
        icon: Users,
        bg: "bg-blue-100",
        color: "text-blue-600",
    },
    {
        title: '5 employees added to "Engineering"',
        by: "Rohit Kumar",
        time: "1d ago",
        icon: UserPlus,
        bg: "bg-orange-100",
        color: "text-orange-500",
    },
    {
        title: 'Department "Sales" status changed',
        by: "Karan Malhotra",
        time: "2d ago",
        icon: Settings2,
        bg: "bg-violet-100",
        color: "text-violet-600",
    },
];

function RecentActivities() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">

            <h2 className="text-sm font-semibold text-slate-900">
                Recent Activities
            </h2>

            <div className="mt-4 space-y-4">

                {activities.map((activity) => {
                    const Icon = activity.icon;

                    return (
                        <div
                            key={activity.title}
                            className="flex items-center gap-3"
                        >

                            <div
                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${activity.bg} ${activity.color}`}
                            >
                                <Icon size={16} />
                            </div>

                            <div className="min-w-0 flex-1">

                                <p className="truncate text-[11px] font-medium text-slate-800">
                                    {activity.title}
                                </p>

                                <p className="mt-0.5 text-[9px] text-slate-500">
                                    By {activity.by}
                                </p>

                            </div>

                            <span className="shrink-0 text-[9px] text-slate-400">
                                {activity.time}
                            </span>

                        </div>
                    );
                })}

            </div>

        </div>
    );
}

export default RecentActivities;