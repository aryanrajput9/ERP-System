import { Hand } from "lucide-react";
import { useSelector } from "react-redux";

const AttendanceCard = ({ todayAttendance, checkInDate, checkInData }) => {

    const { employee } = useSelector((state) => state.employee);



    return (
        <div
            className="rounded-[var(--radius)] border bg-[var(--card)] px-10 py-8"
            style={{
                borderColor: "var(--border)",
                boxShadow: "var(--shadow-sm)",
            }}
        >
            <div className="flex items-center justify-between">

                {/* Left */}
                <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-[var(--text-secondary)]">
                        {checkInDate}
                    </p>

                    <h1 className="mt-3 flex items-center gap-2 text-5xl font-bold text-[var(--text-primary)]">
                        Good Morning, {employee.name}
                        <span>👋</span>
                    </h1>

                    <p className="mt-4 text-lg italic text-[var(--text-secondary)]">
                        "The only way to do great work is to love what you do."
                        <span className="font-semibold text-[var(--text-primary)]">
                            {" "}
                            - Steve Jobs
                        </span>
                    </p>
                </div>

                {/* Right */}
                <div className="flex flex-col items-end gap-5">

                    <div className="flex items-center gap-2">
                        <span className="h-3.5 w-3.5 rounded-full bg-[var(--warning)]"></span>

                        <span className="text-lg font-medium text-[var(--text-secondary)]">
                            {todayAttendance?.remarks || "not check in"}
                        </span>
                    </div>

                    {todayAttendance === null ? (
                        <button onClick={() => checkInData()}
                            className="flex items-center gap-3 rounded-2xl px-8 py-4 text-lg font-semibold text-[var(--text-white)] transition-all duration-300 hover:scale-[1.02]"
                            style={{
                                background: "var(--primary)",
                            }}
                            onMouseEnter={(e) =>
                            (e.currentTarget.style.background = "var(--primary-dark)")
                            }
                            onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "var(--primary)")
                            }
                        >
                            <Hand className="h-6 w-6 rotate-180" />

                            Check In
                        </button>
                    ) : (
                        <button onClick={() => checkInData()}
                            className="flex items-center gap-3 rounded-2xl px-8 py-4 text-lg font-semibold text-[var(--text-white)] transition-all duration-300 hover:scale-[1.02]"
                            style={{
                                background: "var( --success)",
                            }}
                            onMouseEnter={(e) =>
                            (e.currentTarget.style.background = "var(--primary-dark)")
                            }
                            onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "var(--primary)")
                            }
                        >
                            <Hand className="h-6 w-6 rotate-180 text-green-600" />

                            Check Out
                        </button>
                    )}

                </div>
            </div>
        </div>
    );
};

export default AttendanceCard;