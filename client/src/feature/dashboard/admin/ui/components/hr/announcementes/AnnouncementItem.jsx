import React from "react";
import {
    CalendarDays,
    MoreVertical,
} from "lucide-react";

function AnnouncementItem({ announcement }) {

    const statusStyles = {
        Published: "bg-violet-50 text-violet-600",
        Scheduled: "bg-orange-50 text-orange-500",
        Draft: "bg-blue-50 text-blue-600",
        Archived: "bg-slate-100 text-slate-500",
    };

    return (
        <div className="flex gap-4 border-b border-slate-100 px-5 py-5 last:border-b-0">

            {/* Icon */}
            <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg ${announcement.iconBg} ${announcement.iconColor}`}
            >
                <announcement.icon size={23} />
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">

                <div className="flex items-start gap-2">

                    <span
                        className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${announcement.dot}`}
                    />

                    <div>

                        <h3 className="text-sm font-semibold text-slate-900">
                            {announcement.title}
                        </h3>

                        <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500">
                            {announcement.description}
                        </p>

                    </div>

                </div>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap items-center gap-2">

                    <span
                        className={`rounded-md px-2 py-1 text-[9px] font-medium ${announcement.categoryBg} ${announcement.categoryColor}`}
                    >
                        {announcement.category}
                    </span>

                    <span className="rounded-md bg-violet-50 px-2 py-1 text-[9px] font-medium text-violet-600">
                        {announcement.audience}
                    </span>

                </div>

            </div>

            {/* Date */}
            <div className="hidden w-28 shrink-0 md:block">

                <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                    <CalendarDays size={13} />
                    {announcement.date}
                </div>

                <p className="mt-1 text-[9px] text-slate-400">
                    {announcement.time}
                </p>

                <span
                    className={`mt-3 inline-block rounded-md px-2.5 py-1 text-[9px] font-medium ${statusStyles[announcement.status]}`}
                >
                    {announcement.status}
                </span>

            </div>

            {/* More */}
            <button className="flex h-8 w-8 shrink-0 items-center justify-center text-slate-400">
                <MoreVertical size={17} />
            </button>

        </div>
    );
}

export default AnnouncementItem;