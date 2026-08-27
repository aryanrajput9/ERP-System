import React from "react";
import CandidateRow from "./CandidateRow";
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const candidates = [
    {
        name: "Aarav Sharma",
        email: "aarav.sharma@gmail.com",
        position: "Frontend Developer",
        date: "23 Aug 2026",
        stage: "Interview",
        avatar: "AS",
    },
    {
        name: "Priya Singh",
        email: "priya.singh@gmail.com",
        position: "UI/UX Designer",
        date: "22 Aug 2026",
        stage: "Shortlisted",
        avatar: "PS",
    },
    {
        name: "Rahul Verma",
        email: "rahul.verma@gmail.com",
        position: "Backend Developer",
        date: "21 Aug 2026",
        stage: "Applied",
        avatar: "RV",
    },
    {
        name: "Neha Patel",
        email: "neha.patel@gmail.com",
        position: "HR Executive",
        date: "20 Aug 2026",
        stage: "Rejected",
        avatar: "NP",
    },
    {
        name: "Vikas Kumar",
        email: "vikas.kumar@gmail.com",
        position: "React Developer",
        date: "19 Aug 2026",
        stage: "Interview",
        avatar: "VK",
    },
];

function RecentApplications() {
    return (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

                <div>
                    <h2 className="font-semibold text-slate-900">
                        Recent Applications
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">
                        Latest candidates who applied for open positions
                    </p>
                </div>

                <button className="text-sm font-medium text-violet-600">
                    View All
                </button>

            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full min-w-[760px]">

                    <thead>
                        <tr className="border-b border-slate-200 bg-slate-50/70 text-left">

                            <th className="px-5 py-4 text-xs font-semibold text-slate-600">
                                Candidate
                            </th>

                            <th className="px-4 py-4 text-xs font-semibold text-slate-600">
                                Position
                            </th>

                            <th className="px-4 py-4 text-xs font-semibold text-slate-600">
                                Applied On
                            </th>

                            <th className="px-4 py-4 text-xs font-semibold text-slate-600">
                                Stage
                            </th>

                            <th className="px-4 py-4 text-xs font-semibold text-slate-600">
                                Action
                            </th>

                        </tr>
                    </thead>

                    <tbody>
                        {candidates.map((candidate) => (
                            <CandidateRow
                                key={candidate.email}
                                candidate={candidate}
                            />
                        ))}
                    </tbody>

                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-6 py-4">

                <p className="text-xs text-slate-500">
                    Showing 1 to 5 of 286 candidates
                </p>

                <div className="flex items-center gap-2">

                    <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-400">
                        <ChevronLeft size={16} />
                    </button>

                    <button className="h-8 w-8 rounded-lg border border-slate-200 text-xs text-slate-600">
                        1
                    </button>

                    <button className="h-8 w-8 rounded-lg bg-violet-600 text-xs text-white">
                        2
                    </button>

                    <button className="h-8 w-8 rounded-lg border border-slate-200 text-xs text-slate-600">
                        3
                    </button>

                    <span className="px-1 text-xs text-slate-400">
                        ...
                    </span>

                    <button className="h-8 w-9 rounded-lg border border-slate-200 text-xs text-slate-600">
                        29
                    </button>

                    <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500">
                        <ChevronRight size={16} />
                    </button>

                </div>

            </div>

        </div>
    );
}

export default RecentApplications;