


function EmployeesByDepartment({ allEmploye }) {

    const departmentEntireise = Object.entries(
        allEmploye.reduce((acc, employee) => {

            const department = employee.department;

            acc[department] = (acc[department] || 0) + 1;

            return acc;

        }, {})
    ).map(([department, count]) => ({
        department,
        count,
        percentage: Math.round(
            (count / allEmploye.length) * 100
        ),
    }));


    return (
        <div className="rounded-2xl border border-slate-800 bg-[#101622] p-4 shadow-lg">

            <h2 className="text-sm font-semibold text-white">
                Employees by Department
            </h2>


            <div className="mt-5 flex items-center gap-5">

                {/* Donut */}
                <div
                    className="relative h-[125px] w-[125px] shrink-0 rounded-full"
                    style={{
                        background: `
                            conic-gradient(
                                #3b82f6 0deg 142deg,
                                #8b5cf6 142deg 212deg,
                                #f59e0b 212deg 258deg,
                                #ec4899 258deg 287deg,
                                #22c55e 287deg 313deg,
                                #06b6d4 313deg 360deg
                            )
                        `,
                    }}
                >

                    <div className="absolute inset-[28px] flex flex-col items-center justify-center rounded-full bg-[#101622]">

                        <span className="text-xl font-bold text-white">
                            {allEmploye.length || 0}
                        </span>

                        <span className="text-[10px] text-slate-500">
                            Total
                        </span>

                    </div>

                </div>


                {/* Legend */}
                <div className="min-w-0 flex-1 space-y-2.5">

                    {departmentEntireise.map((department) => (

                        <div
                            key={department.department}
                            className="flex items-center justify-between gap-2"
                        >

                            <div className="flex items-center gap-2">

                                <span
                                    className="h-2 w-2 rounded-full"
                                    style={{
                                        backgroundColor:
                                            department.department === "software"
                                                ? "#3b82f6"
                                                : "#8b5cf6",
                                    }}
                                />

                                <span className="text-[10px] text-slate-300">
                                    {department.department}
                                </span>

                            </div>


                            <span className="whitespace-nowrap text-[10px] text-slate-400">
                                {department.count} ({department.percentage}%)
                            </span>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default EmployeesByDepartment;


