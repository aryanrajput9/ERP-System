import React from "react";

const stages = [
    {
        name: "Applicants",
        count: 320,
        color: "bg-violet-500",
        width: "100%",
    },
    {
        name: "Screening",
        count: 180,
        color: "bg-blue-500",
        width: "80%",
    },
    {
        name: "Interviews",
        count: 85,
        color: "bg-green-500",
        width: "62%",
    },
    {
        name: "Shortlisted",
        count: 32,
        color: "bg-orange-400",
        width: "45%",
    },
    {
        name: "Offered",
        count: 18,
        color: "bg-orange-500",
        width: "32%",
    },
    {
        name: "Hired",
        count: 14,
        color: "bg-red-500",
        width: "23%",
    },
];

function RecruitmentFunnel() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">

            <h2 className="text-sm font-semibold">
                Recruitment Funnel
            </h2>

            <div className="mt-5 flex items-center gap-5">

                <div className="flex flex-col items-center gap-1">

                    {stages.map((stage) => (
                        <div
                            key={stage.name}
                            className={`h-7 ${stage.color}`}
                            style={{
                                width: stage.width,
                                clipPath:
                                    "polygon(8% 0, 92% 0, 100% 100%, 0 100%)",
                            }}
                        />
                    ))}

                </div>

                <div className="flex-1 space-y-2">

                    {stages.map((stage) => (
                        <div
                            key={stage.name}
                            className="flex items-center justify-between text-[10px]"
                        >

                            <span className="text-slate-600">
                                {stage.name}
                            </span>

                            <span className="font-medium text-slate-800">
                                {stage.count}
                            </span>

                        </div>
                    ))}

                </div>

            </div>

            <button className="mt-5 w-full rounded-lg border border-slate-200 py-2 text-xs font-medium text-violet-600">
                View Recruitment Report →
            </button>

        </div>
    );
}

export default RecruitmentFunnel;