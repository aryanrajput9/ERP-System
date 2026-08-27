import React from "react";
import { Plus } from "lucide-react";

function DepartmentHeader() {
    return (
        <div className="flex items-center justify-between">

            <div>
                <h1 className="text-2xl font-bold text-slate-900">
                    Departments
                </h1>

                <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                    <span>Dashboard</span>

                    <span>›</span>

                    <span className="font-medium text-violet-600">
                        Departments
                    </span>
                </div>
            </div>

            <button className="flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-violet-700">
                <Plus size={17} />
                Add Department
            </button>

        </div>
    );
}

export default DepartmentHeader;