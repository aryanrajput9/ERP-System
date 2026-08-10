import { Circle } from "rc-progress";
import useEmployeAttendanceHook from "../../hooks/useEmployeeAttendenceHook";
import { CheckCircle2 } from "lucide-react";

const AttendanceOverview = ({
    todayAttendance
}) => {

    const { checkInTime } = useEmployeAttendanceHook.getTimeAndDate()

    return (
        <div
            className="rounded-[var(--radius)] border bg-[var(--card)] p-8"
            style={{
                borderColor: "var(--border)",
                boxShadow: "var(--shadow-sm)",
            }}
        >
            <h2 className="text-3xl font-bold text-[var(--text-primary)]">
                Today's Attendance
            </h2>

            {/* Progress */}
            <div className="flex h-full flex-col items-center justify-center text-center py-4">
                {todayAttendance?.checkOut === null ? (
                    <>
                        {/* Working / Live */}
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500">
                                <CheckCircle2 className="h-5 w-5 text-white" />
                            </div>
                        </div>

                        <h3 className="text-3xl font-bold text-[var(--text-primary)]">
                            {useEmployeAttendanceHook.currentWorkingHours(
                                todayAttendance?.checkIn
                            )}
                        </h3>

                        <p className="mt-1 text-sm text-[var(--text-secondary)]">
                            Current Hours
                        </p>

                        <div className="mt-3 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                            Working
                        </div>

                        {/* Footer */}

                        <div
                            className="flex justify-between rounded-2xl bg-[var(--background)] p-5"
                            style={{
                                border: "1px solid var(--border)",
                            }}
                        >
                            <div>
                                <p className="text-sm text-[var(--text-secondary)]">
                                    Check-in
                                </p>

                                <h4 className="mt-1 text-2xl font-bold text-[var(--text-primary)]">
                                    {checkInTime(todayAttendance?.checkIn)}
                                </h4>
                            </div>

                            <div className="text-right">
                                <p className="text-sm text-[var(--text-secondary)]">
                                    Expected Out
                                </p>

                                <h4 className="mt-1 text-2xl font-bold text-[var(--text-primary)]">
                                    {useEmployeAttendanceHook.circleTime(todayAttendance?.checkIn)}
                                </h4>
                            </div>
                        </div>
                    </>


                ) : (
                    <>
                        {/* Checked Out */}
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                            <CheckCircle2 className="h-8 w-8 text-slate-700 dark:text-slate-300" />
                        </div>

                        <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                            Checked Out
                        </h3>

                        <p className="mt-1 text-sm text-[var(--text-secondary)]">
                            {new Date(todayAttendance.checkOut).toLocaleTimeString("en-IN", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </p>

                        <div className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3 shadow-sm">
                            <p className="text-xs font-medium text-[var(--text-secondary)]">
                                CheckOut Day
                            </p>

                            <p className="mt-1 text-xl font-bold text-[var(--text-primary)]">
                                {new Date(todayAttendance.checkOut).toLocaleDateString("en-IN", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric"
                                })}
                            </p>
                        </div>
                    </>
                )}
            </div>

        </div>
    );
};

export default AttendanceOverview;