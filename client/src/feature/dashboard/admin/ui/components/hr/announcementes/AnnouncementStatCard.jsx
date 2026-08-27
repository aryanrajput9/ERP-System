import React from "react";

function AnnouncementStatCard({
    title,
    value,
    description,
    icon: Icon,
    iconBg,
    iconColor,
    descriptionColor,
}) {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">

            <div className="flex items-center gap-4">

                <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconBg} ${iconColor}`}
                >
                    <Icon size={22} />
                </div>

                <div>

                    <p className="text-xs font-medium text-slate-500">
                        {title}
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-slate-900">
                        {value}
                    </h2>

                    <p
                        className={`mt-1 text-[10px] ${descriptionColor}`}
                    >
                        {description}
                    </p>

                </div>

            </div>

        </div>
    );
}

export default AnnouncementStatCard;