import React from "react";
import {
    BriefcaseBusiness,
    MapPin,
    Clock3,
    MoreVertical,
} from "lucide-react";

function JobCard({ job }) {
    return (
        <div className="rounded-xl border border-slate-200 p-4 transition hover:border-violet-200 hover:bg-violet-50/30">

            <div className="flex items-start justify-between">

                <div className="flex gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                        <BriefcaseBusiness size={20} />
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-800">
                            {job.title}
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                            {job.department}
                        </p>
                    </div>

                </div>

                <button className="text-slate-400">
                    <MoreVertical size={17} />
                </button>

            </div>

            <div className="mt-4 flex gap-5 text-xs text-slate-500">

                <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {job.location}
                </span>

                <span className="flex items-center gap-1.5">
                    <Clock3 size={14} />
                    {job.type}
                </span>

            </div>

            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">

                <p className="text-xs text-slate-500">
                    <span className="font-semibold text-slate-800">
                        {job.applicants}
                    </span>{" "}
                    applicants
                </p>

                <span className="rounded-md bg-green-50 px-2.5 py-1 text-xs font-medium text-green-600">
                    Active
                </span>

            </div>

        </div>
    );
}

export default JobCard;