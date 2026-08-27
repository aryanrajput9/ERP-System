import React from "react";
import SectionHeader from "./SectionHeader";


const upcomingLeaves = [
    {
        name: "Rahul Verma",
        leave: "Sick Leave",
        duration: "2 days",
        date: "21 - 22 Aug",
        avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
        name: "Kavya Nair",
        leave: "Casual Leave",
        duration: "1 day",
        date: "23 Aug",
        avatar: "https://i.pravatar.cc/100?img=47",
    },
    {
        name: "Deepak Yadav",
        leave: "Earned Leave",
        duration: "5 days",
        date: "25 - 29 Aug",
        avatar: "https://i.pravatar.cc/100?img=11",
    },
];






function UpcomingLeaves() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-[#101622] shadow-lg">
            <SectionHeader
                icon="🗓️"
                title="Upcoming Leaves"
            />

            <div className="mt-2 px-4 pb-2">
                {upcomingLeaves.map((item, index) => (
                    <div
                        key={item.name}
                        className={`flex items-center gap-3 py-3 ${index !== upcomingLeaves.length - 1
                            ? "border-b border-slate-800/70"
                            : ""
                            }`}
                    >
                        {/* Avatar */}
                        <img
                            src={item.avatar}
                            alt={item.name}
                            className="h-8 w-8 shrink-0 rounded-full object-cover ring-1 ring-slate-700"
                        />

                        {/* Employee */}
                        <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold text-white">
                                {item.name}
                            </p>

                            <div className="mt-1 flex items-center gap-1.5 text-[10px] text-slate-400">
                                <span>{item.leave}</span>

                                <span>•</span>

                                <span>{item.duration}</span>
                            </div>
                        </div>

                        {/* Date */}
                        <span className="whitespace-nowrap text-[10px] text-slate-300">
                            {item.date}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default UpcomingLeaves