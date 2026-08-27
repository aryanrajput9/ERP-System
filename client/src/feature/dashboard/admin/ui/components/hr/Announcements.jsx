import SectionHeader from "./SectionHeader";



const announcements = [
    {
        icon: "🎉",
        title: "Annual Day Celebration",
        description: "Company annual day will be held on 30th Aug 2026.",
        time: "2 hours ago",
        badge: "New",
    },
    {
        icon: "🩺",
        title: "Health Check-up Camp",
        description: "Free health check-up for all employees.",
        time: "1 day ago",
    },
    {
        icon: "🏠",
        title: "Work From Home",
        description: "WFH allowed on Fridays for next month.",
        time: "3 days ago",
    },
];
function Announcements() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-[#101622] shadow-lg">
            <SectionHeader
                icon="📢"
                title="Announcements"
            />

            <div className="mt-2 px-3 pb-2">
                {announcements.map((item, index) => (
                    <div
                        key={item.title}
                        className={`flex gap-3 px-2 py-3.5 ${index !== announcements.length - 1
                            ? "border-b border-slate-800/70"
                            : ""
                            }`}
                    >
                        {/* Icon */}
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-800/60 text-base">
                            {item.icon}
                        </div>

                        {/* Content */}
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                                <h3 className="text-xs font-semibold text-white">
                                    {item.title}
                                </h3>

                                {item.badge && (
                                    <span className="rounded-full bg-pink-500/20 px-2 py-0.5 text-[9px] font-semibold text-pink-400">
                                        {item.badge}
                                    </span>
                                )}
                            </div>

                            <p className="mt-1 text-[10px] leading-4 text-slate-400">
                                {item.description}
                            </p>

                            <p className="mt-1 text-[10px] text-slate-500">
                                {item.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Announcements