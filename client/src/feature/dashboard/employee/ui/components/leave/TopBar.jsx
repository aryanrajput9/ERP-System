import { Plus } from "lucide-react";
import React from "react";

function TopBar({ setHide }) {
    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm md:flex-row md:items-center md:justify-between">

            {/* Left */}
            <div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                    Leave Management
                </h2>

                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    Apply for leave and track your leave requests.
                </p>
            </div>

            {/* Right */}
            <button onClick={() => setHide((prev) => !prev)}
                className="flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-[var(--text-white)] transition-all duration-200 hover:scale-[1.02] hover:opacity-90"
                style={{ background: "var(--primary)" }}
            >
                <Plus size={18} />
                Apply Leave
            </button>
        </div>
    );
}

export default TopBar;