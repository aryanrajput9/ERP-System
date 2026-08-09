import React, { useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";

function Calender() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); // 0-11

    const { history } = useSelector((state) => state.attendance)

    // Backend se aane wala data
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
                status: attendanceData(day) || null,
            });
        }

        return arr;
    }, [year, month, history]);

    const dotColor = {
        present: "bg-green-500",
        absent: "bg-red-500",
        late: "bg-orange-500",
        leave: "bg-purple-500",
    };

    return (
        <div className="bg-white rounded-2xl border p-5 w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold">Attendance Calendar</h2>

                <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg border">
                        <ChevronLeft size={18} />
                    </button>

                    <span className="px-3 py-2 rounded-lg border text-sm font-medium">
                        {monthName} {year}
                    </span>

                    <button className="p-2 rounded-lg border">
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            {/* Week days */}
            <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500 mb-3">
                {days.map((d) => (
                    <div key={d} className="py-2">
                        {d}
                    </div>
                ))}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-y-4">
                {calendarDays.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center h-12"
                    >
                        {item ? (
                            <div
                                className={`relative flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium
                  ${item.day === currentDate.getDate()
                                        ? "border-2 border-purple-500 text-purple-600"
                                        : "text-gray-700 hover:bg-gray-50"
                                    }`}
                            >
                                {item.day}

                                {item.status && (
                                    <span
                                        className={`absolute bottom-1 w-1.5 h-1.5 rounded-full ${dotColor[item.status]}`}
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
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    Present
                </div>

                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    Absent
                </div>

                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                    Late
                </div>

                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    Leave
                </div>
            </div>
        </div>
    );
}

export default Calender;