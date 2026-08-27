import React from "react";
import {
    Check,
    Circle,
    CalendarDays,
} from "lucide-react";

function PerformanceCycle() {
    const steps = [
        {
            number: 1,
            title: "Self Evaluation",
            date: "Apr 1 - Apr 30",
            active: true,
            completed: true,
        },
        {
            number: 2,
            title: "Manager Review",
            date: "May 1 - May 20",
            active: false,
            completed: false,
        },
        {
            number: 3,
            title: "Calibration",
            date: "May 21 - Jun 5",
            active: false,
            completed: false,
        },
        {
            number: 4,
            title: "Final Review",
            date: "Jun 6 - Jun 20",
            active: false,
            completed: false,
        },
    ];

    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">

            <div className="flex items-start justify-between">

                <div>
                    <h2 className="text-sm font-semibold text-slate-900">
                        Performance Cycle
                    </h2>

                    <h3 className="mt-4 text-xs font-semibold text-slate-800">
                        Q2 2025 Performance Review
                    </h3>

                    <p className="mt-1 text-[10px] text-slate-500">
                        1 Apr 2025 - 30 Jun 2025
                    </p>
                </div>

                <span className="rounded-md bg-green-50 px-2 py-1 text-[9px] font-medium text-green-600">
                    Active
                </span>

            </div>

            {/* Progress */}
            <div className="mt-5">

                <div className="flex items-center justify-between text-[10px]">
                    <span className="text-slate-500">
                        Progress
                    </span>

                    <span className="font-medium text-slate-700">
                        68% Completed
                    </span>
                </div>

                <div className="mt-2 h-1.5 rounded-full bg-slate-100">
                    <div className="h-full w-[68%] rounded-full bg-violet-600" />
                </div>

            </div>

            {/* Current Stage */}
            <div className="mt-4 flex items-center justify-between border-b border-slate-100 pb-4">

                <span className="text-[10px] text-slate-500">
                    Stage: Self Evaluation
                </span>

                <span className="flex items-center gap-1 text-[10px] text-slate-500">
                    <CalendarDays size={12} />
                    Ends in 18 days
                </span>

            </div>

            {/* Steps */}
            <div className="mt-4 space-y-4">

                {steps.map((step) => (
                    <div
                        key={step.number}
                        className="flex items-center gap-3"
                    >

                        <div
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${step.completed
                                ? "bg-violet-600 text-white"
                                : "border border-slate-300 text-slate-400"
                                }`}
                        >
                            {step.completed ? (
                                <Check size={12} />
                            ) : (
                                <Circle size={10} />
                            )}
                        </div>

                        <div>
                            <p className="text-[10px] font-medium text-slate-700">
                                {step.title}
                            </p>

                            <p className="text-[9px] text-slate-400">
                                {step.date}
                            </p>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default PerformanceCycle;