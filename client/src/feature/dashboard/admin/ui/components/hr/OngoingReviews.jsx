import React from "react";
import ReviewRow from "./ReviewRow";

const reviews = [
    {
        name: "Priya Singh",
        id: "EMP001",
        avatar: "PS",
        department: "Marketing",
        stage: "Self Evaluation",
        progress: 60,
        dueDate: "30 Apr 2025",
        overdue: true,
    },
    {
        name: "Amit Kumar",
        id: "EMP002",
        avatar: "AK",
        department: "Development",
        stage: "Manager Review",
        progress: 75,
        dueDate: "10 May 2025",
    },
    {
        name: "Rahul Verma",
        id: "EMP003",
        avatar: "RV",
        department: "Design",
        stage: "Self Evaluation",
        progress: 40,
        dueDate: "28 Apr 2025",
        overdue: true,
    },
    {
        name: "Neha Patel",
        id: "EMP004",
        avatar: "NP",
        department: "HR",
        stage: "Manager Review",
        progress: 90,
        dueDate: "12 May 2025",
    },
    {
        name: "Vikas Sharma",
        id: "EMP005",
        avatar: "VS",
        department: "Sales",
        stage: "Calibration",
        progress: 20,
        dueDate: "5 May 2025",
    },
];

function OngoingReviews() {
    return (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

            <div className="flex items-center justify-between px-5 py-4">

                <div>
                    <h2 className="text-sm font-semibold text-slate-900">
                        Ongoing Reviews
                    </h2>
                </div>

            </div>

            <div className="overflow-x-auto">

                <table className="w-full min-w-[650px]">

                    <thead>
                        <tr className="border-y border-slate-100 bg-slate-50/50 text-left">

                            <th className="px-4 py-3 text-[10px] font-semibold text-slate-600">
                                Employee
                            </th>

                            <th className="px-3 py-3 text-[10px] font-semibold text-slate-600">
                                Department
                            </th>

                            <th className="px-3 py-3 text-[10px] font-semibold text-slate-600">
                                Review Stage
                            </th>

                            <th className="px-3 py-3 text-[10px] font-semibold text-slate-600">
                                Progress
                            </th>

                            <th className="px-3 py-3 text-[10px] font-semibold text-slate-600">
                                Due Date
                            </th>

                            <th className="px-3 py-3 text-[10px] font-semibold text-slate-600">
                                Action
                            </th>

                        </tr>
                    </thead>

                    <tbody>
                        {reviews.map((review) => (
                            <ReviewRow
                                key={review.id}
                                review={review}
                            />
                        ))}
                    </tbody>

                </table>

            </div>

            <div className="border-t border-slate-100 px-5 py-4">
                <button className="text-xs font-medium text-violet-600">
                    View All Reviews →
                </button>
            </div>

        </div>
    );
}

export default OngoingReviews;