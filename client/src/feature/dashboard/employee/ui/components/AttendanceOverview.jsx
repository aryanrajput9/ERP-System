import { Circle } from "rc-progress";
import useEmployeAttendanceHook from "../../hooks/useEmployeeAttendenceHook";

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

            <div className="my-10 flex justify-center">
                <div className="relative h-44 w-44">
                    <Circle
                        percent={useEmployeAttendanceHook.circleTime(todayAttendance?.checkIn)}
                        strokeWidth={8}
                        strokeColor="var(--primary)"
                        trailWidth={8}
                        trailColor="var(--border)"
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h3 className="text-4xl font-bold text-[var(--text-primary)]">
                            {useEmployeAttendanceHook.currentWorkingHours(todayAttendance?.checkIn)}
                        </h3>

                        <p className="text-sm text-[var(--text-secondary)]">
                            Current Hours
                        </p>
                    </div>
                </div>
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
        </div>
    );
};

export default AttendanceOverview;