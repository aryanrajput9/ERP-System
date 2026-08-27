import React from "react";

function StatCard({
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
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-slate-500">
                        {title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-slate-900">
                        {value}
                    </h2>

                    <p className={`mt-1 text-xs ${descriptionColor}`}>
                        {description}
                    </p>
                </div>

                <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBg} ${iconColor}`}
                >
                    <Icon size={23} />
                </div>
            </div>
        </div>
    );
}

export default StatCard;