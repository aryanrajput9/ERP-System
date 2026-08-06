export default function DashboardHero() {
    return (
        <section className="max-w-6xl mx-auto p-6">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-[var(--background)] shadow-lg">

                {/* Image */}
                <div className="h-[480px] overflow-hidden">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHtQXyAMTe7Zhvm8bSV2S80Xt5sPjYopKhpn5VcVrXqw&s=10" // apni image lagana
                        alt="ERP Dashboard"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3">

                    <div className="border-t border-r border-gray-200 p-6">
                        <p className="text-xs uppercase tracking-widest text-gray-500">
                            Total Payroll Processed
                        </p>

                        <h2 className="mt-2 text-4xl font-bold text-gray-900">
                            $14.2M
                        </h2>
                    </div>

                    <div className="border-t border-r border-gray-200 p-6">
                        <p className="text-xs uppercase tracking-widest text-gray-500">
                            Active Employees
                        </p>

                        <h2 className="mt-2 text-4xl font-bold text-gray-900">
                            2,481
                        </h2>
                    </div>

                    <div className="border-t border-gray-200 p-6">
                        <p className="text-xs uppercase tracking-widest text-gray-500">
                            System Uptime
                        </p>

                        <h2 className="mt-2 text-4xl font-bold text-emerald-600">
                            99.99%
                        </h2>
                    </div>

                </div>
            </div>
        </section>
    );
}