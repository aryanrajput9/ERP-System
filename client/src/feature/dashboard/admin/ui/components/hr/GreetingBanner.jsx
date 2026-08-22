import React from "react";
import { CalendarDays } from "lucide-react";

function GreetingBanner({ name }) {

    return (
        <div className="w-full rounded-2xl bg-[#080d19] px-8 py-7 text-white shadow-lg">
            <div className="flex items-center justify-between gap-6">

                {/* Left Content */}
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                        Good Morning,{" "}
                        <span className="text-[#22e56f]">{name || "hello"}</span>{" "}
                        <span>👋</span>
                    </h1>

                    <p className="mt-2 text-sm text-slate-400">
                        Here's what's happening with your organization today.
                    </p>
                </div>

                {/* Right Date */}
                <div className="flex items-center gap-3 text-slate-400">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900">
                        <CalendarDays size={20} />
                    </div>

                    <span className="text-sm font-medium">
                        Wednesday, 20 Aug 2026
                    </span>
                </div>

            </div>
        </div>
    );
}

export default GreetingBanner;