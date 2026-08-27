import React from "react";
import { Search, Bell } from "lucide-react";

function AnnouncementsHeader() {
    return (
        <div className="flex items-center justify-between gap-5">

            <div>
                <h1 className="text-2xl font-bold text-slate-900">
                    Announcements
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    Stay informed with the latest updates and important announcements.
                </p>
            </div>

            <div className="flex items-center gap-4">

                {/* Search */}
                <div className="hidden w-64 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 md:flex">

                    <Search
                        size={16}
                        className="text-slate-400"
                    />

                    <input
                        type="text"
                        placeholder="Search announcements..."
                        className="w-full bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400"
                    />

                </div>

                {/* Notification */}
                <button className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500">

                    <Bell size={18} />

                    <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-violet-600 text-[8px] text-white">
                        3
                    </span>

                </button>

                {/* Profile */}
                <div className="hidden items-center gap-3 md:flex">

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-xs font-semibold text-violet-600">
                        RS
                    </div>

                    <div>
                        <p className="text-xs font-semibold text-slate-800">
                            Rahul Sharma
                        </p>

                        <p className="text-[10px] text-slate-500">
                            HR Manager
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default AnnouncementsHeader;