import { ChevronDown } from "lucide-react";

export default function ProfileButton({ employee, role, employeImage }) {
    return (
        <button className="w-full flex items-center justify-between rounded-2xl border border-slate-800 bg-[#0B1220] px-4 py-3 hover:border-slate-700 transition-all duration-200">

            {/* Left */}
            <div className="flex items-center gap-3">

                {/* Avatar */}
                <img
                    src={employeImage}
                    alt="avatar"
                    className="h-12 w-12 rounded-full object-cover border border-slate-700"
                />

                {/* Name + Role + Status */}
                <div className="text-left">
                    <h3 className="text-sm font-semibold text-white">{employee}</h3>
                    <p className="text-xs text-slate-400">{role}</p>

                    <div className="mt-2 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                        <span className="text-xs text-slate-400">Online</span>
                    </div>
                </div>
            </div>

            {/* Right */}
            <ChevronDown className="h-4 w-4 text-slate-400" />
        </button>
    );
}