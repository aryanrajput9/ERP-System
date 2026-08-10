import React, { useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";

function Calender() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const { history = [] } = useSelector((state) => state.attendance);

    // Attendance by day
    const attendanceData = (day) => {
        const record = history.find((elem) => {
            const date = new Date(elem.checkIn);

            return (
                date.getDate() === day &&
                date.getMonth() === month &&
                date.getFullYear() === year
            );
        });

        return record?.status?.toLowerCase() || null;
    };

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const monthName = currentDate.toLocaleString("default", {
        month: "long",
    });

    const calendarDays = useMemo(() => {
        const firstDay = new Date(year, month, 1).getDay();
        const totalDays = new Date(year, month + 1, 0).getDate();

        const arr = [];

        // Empty cells
        for (let i = 0; i < firstDay; i++) {
            arr.push(null);
        }

        // Dates
        for (let day = 1; day <= totalDays; day++) {
            arr.push({
                day,
                status: attendanceData(day),
            });
        }

        return arr;
    }, [year, month, history]);

    const dotColor = {
        present: "bg-[var(--success)]",
        absent: "bg-[var(--danger)]",
        late: "bg-[var(--warning)]",
        leave: "bg-[var(--primary)]",
    };

    return (
        <div className="w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                    Attendance Calendar
                </h2>

                <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--hover-bg)] transition-colors">
                        <ChevronLeft size={18} className="text-[var(--text-primary)]" />
                    </button>

                    <span className="px-3 py-2 rounded-lg border border-[var(--border)] text-sm font-medium text-[var(--text-primary)] bg-[var(--surface)]">
                        {monthName} {year}
                    </span>

                    <button className="p-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--hover-bg)] transition-colors">
                        <ChevronRight size={18} className="text-[var(--text-primary)]" />
                    </button>
                </div>
            </div>

            {/* Week days */}
            <div className="grid grid-cols-7 text-center text-sm font-medium text-[var(--text-secondary)] mb-3">
                {days.map((d) => (
                    <div key={d} className="py-2">
                        {d}
                    </div>
                ))}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-y-3">
                {calendarDays.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center h-12"
                    >
                        {item ? (
                            <div
                                className={`relative flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium transition-colors
                  ${item.day === currentDate.getDate()
                                        ? "border-2 border-[var(--primary)] text-[var(--primary)] bg-[var(--surface-2)]"
                                        : "text-[var(--text-primary)] hover:bg-[var(--hover-bg)]"
                                    }`}
                            >
                                {item.day}

                                {/* Status dot */}
                                {item.status && (
                                    <span
                                        className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${dotColor[item.status] || "bg-gray-400"
                                            }`}
                                    />
                                )}
                            </div>
                        ) : (
                            <div className="w-10 h-10" />
                        )}
                    </div>
                ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center justify-center gap-5 mt-6 text-sm text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--success)]" />
                    Present
                </div>

                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--danger)]" />
                    Absent
                </div>

                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--warning)]" />
                    Late
                </div>

                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]" />
                    Leave
                </div>
            </div>
        </div>
    );
}

export default Calender;