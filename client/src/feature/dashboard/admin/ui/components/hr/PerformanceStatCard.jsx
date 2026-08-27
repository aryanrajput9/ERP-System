import React from "react";

function PerformanceStatCard({
    title,
    value,
    suffix,
    description,
    icon: Icon,
    iconBg,
    iconColor,
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

                    <div className="mt-1 flex items-baseline gap-1">
                        <h2 className="text-2xl font-bold text-slate-900">
                            {value}
                        </h2>

                        {suffix && (
                            <span className="text-xs text-slate-500">
                                {suffix}
                            </span>
                        )}
                    </div>

                    <p className="mt-1 text-[11px] text-green-600">
                        {description}
                    </p>
                </div>

            </div>

        </div>
    );
}

export default PerformanceStatCard;