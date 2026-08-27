import React from "react";
import JobCard from "./JobCard";

const jobs = [
    {
        title: "Frontend Developer",
        department: "Engineering",
        location: "Remote",
        type: "Full Time",
        applicants: 42,
    },
    {
        title: "UI/UX Designer",
        department: "Design",
        location: "Delhi",
        type: "Full Time",
        applicants: 28,
    },
    {
        title: "HR Executive",
        department: "Human Resources",
        location: "Bihar",
        type: "Full Time",
        applicants: 19,
    },
];

function OpenPositions() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white">

            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

                <h2 className="font-semibold text-slate-900">
                    Open Positions
                </h2>

                <button className="text-sm font-medium text-violet-600">
                    View All
                </button>

            </div>

            <div className="space-y-3 p-5">
                {jobs.map((job) => (
                    <JobCard
                        key={job.title}
                        job={job}
                    />
                ))}
            </div>

        </div>
    );
}

export default OpenPositions;