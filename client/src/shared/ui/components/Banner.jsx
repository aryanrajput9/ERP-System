
function Banner() {
    return (
        <section className="min-h-[80vh] flex items-center justify-center  px-6">
            <div className="max-w-5xl mx-auto text-center">

                <h1 className="text-5xl md:text-6xl font-extrabold text-[ var(--text-primary)] leading-tight">
                    Precision Management for the
                    <br />
                    Modern Enterprise
                </h1>

                <p className="mt-8 text-lg text-slate-600 max-w-3xl mx-auto leading-8">
                    Streamline HR, payroll, and attendance with uncompromising
                    accuracy. Nexus ERP provides developer-grade infrastructure
                    for organizational operations, turning complex data into
                    clear, actionable intelligence.
                </p>

                <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

                    <button className="px-8 py-4 bg-indigo-600 text-white rounded-sm font-semibold shadow-lg hover:bg-indigo-700 transition-all duration-300">
                        Get Started →
                    </button>

                    <button className="px-8 py-4 border border-gray-300 rounded-sm font-semibold text-slate-700 hover:bg-gray-100 transition-all duration-300">
                        View Documentation
                    </button>

                </div>

            </div>
        </section>
    )
}

export default Banner
