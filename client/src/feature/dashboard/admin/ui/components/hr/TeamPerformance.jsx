import React from "react";
import { ChevronDown } from "lucide-react";

const teams = [
    {
        name: "Engineering",
        score: "4.5",
        width: "90%",
    },
    {
        name: "Marketing",
        score: "4.2",
        width: "84%",
    },
    {
        name: "Sales",
        score: "4.0",
        width: "80%",
    },
    {
        name: "Design",
        score: "3.8",
        width: "76%",
    },
    {
        name: "HR",
        score: "4.3",
        width: "86%",
    },
    {
        name: "Finance",
        score: "4.1",
        width: "82%",
    },
];

function TeamPerformance() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white">

            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">

                <h2 className="text-sm font-semibold text-slate-900">
                    Team Performance
                </h2>

                <button className="flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-[10px] text-slate-600">
                    All Departments
                    <ChevronDown size={12} />
                </button>

            </div>

            <div className="space-y-4 p-5">

                {teams.map((team) => (
                    <div key={team.name}>

                        <div className="flex items-center justify-between">

                            <span className="text-[10px] text-slate-600">
                                {team.name}
                            </span>

                            <span className="text-[10px] font-medium text-slate-700">
                                {team.score} / 5
                            </span>

                        </div>

                        <div className="mt-1.5 h-1.5 rounded-full bg-slate-100">

                            <div
                                className="h-full rounded-full bg-violet-500"
                                style={{
                                    width: team.width,
                                }}
                            />

                        </div>

                    </div>
                ))}

            </div>

            <div className="border-t border-slate-100 px-5 py-4 text-center">
                <button className="text-xs font-medium text-violet-600">
                    View Detailed Report →
                </button>
            </div>

        </div>
    );
}

export default TeamPerformance;