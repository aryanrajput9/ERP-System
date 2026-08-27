import React from "react";
import {
    Target,
    ClipboardCheck,
    FileCheck2,
    Users,
    TrendingUp,
} from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Set Goals",
        description: "Define clear goals and expectations for employees.",
        icon: Target,
        bg: "bg-violet-100",
        color: "text-violet-600",
    },
    {
        number: "02",
        title: "Continuous Feedback",
        description: "Provide regular feedback and track progress.",
        icon: ClipboardCheck,
        bg: "bg-blue-100",
        color: "text-blue-600",
    },
    {
        number: "03",
        title: "Review & Evaluate",
        description: "Evaluate performance based on goals and competencies.",
        icon: FileCheck2,
        bg: "bg-green-100",
        color: "text-green-600",
    },
    {
        number: "04",
        title: "Calibration",
        description: "Discuss and align ratings across the team.",
        icon: Users,
        bg: "bg-orange-100",
        color: "text-orange-500",
    },
    {
        number: "05",
        title: "Development",
        description: "Create development plans and track improvement.",
        icon: TrendingUp,
        bg: "bg-pink-100",
        color: "text-pink-500",
    },
];

function PerformanceTracking() {
    return (
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">

            <div className="mb-6">
                <h2 className="text-sm font-semibold text-slate-900">
                    How Performance is Tracked
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                    Employee performance is measured throughout the complete review cycle
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">

                {steps.map((step, index) => {
                    const Icon = step.icon;

                    return (
                        <div
                            key={step.number}
                            className="relative"
                        >

                            <div className="flex items-start gap-3">

                                <div
                                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${step.bg} ${step.color}`}
                                >
                                    <Icon size={20} />
                                </div>

                                <div>

                                    <p className="text-[9px] font-semibold text-slate-400">
                                        {step.number}
                                    </p>

                                    <h3 className="mt-1 text-xs font-semibold text-slate-800">
                                        {step.title}
                                    </h3>

                                    <p className="mt-1 text-[10px] leading-4 text-slate-500">
                                        {step.description}
                                    </p>

                                </div>

                            </div>

                            {index !== steps.length - 1 && (
                                <div className="absolute right-[-20px] top-5 hidden text-slate-300 lg:block">
                                    →
                                </div>
                            )}

                        </div>
                    );
                })}

            </div>

        </div>
    );
}

export default PerformanceTracking;