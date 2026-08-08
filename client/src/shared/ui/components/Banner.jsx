function Banner() {
    return (
        <section className="bg-[var(--background)] py-24">
            <div className="mx-auto max-w-7xl px-6 text-center">
                <h1 className="text-5xl font-extrabold leading-tight text-[var(--text-primary)] md:text-6xl">
                    Precision Management for the
                    <br />
                    Modern Enterprise
                </h1>

                <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
                    Streamline HR, payroll, and attendance with uncompromising
                    accuracy. Nexus ERP provides developer-grade infrastructure
                    for organizational operations, turning complex data into
                    clear, actionable intelligence.
                </p>

                <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

                    {/* Primary Button */}
                    <button
                        className="rounded-[var(--radius)] px-8 py-4 font-semibold text-[var(--text-white)] transition-all duration-300 hover:-translate-y-1"
                        style={{
                            background: "var(--primary)",
                            boxShadow: "var(--shadow-md)",
                        }}
                        onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "var(--primary-dark)")
                        }
                        onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "var(--primary)")
                        }
                    >
                        Get Started →
                    </button>

                    {/* Secondary Button */}
                    <button
                        className="rounded-[var(--radius)] border px-8 py-4 font-semibold transition-all duration-300 hover:bg-[var(--hover-bg)]"
                        style={{
                            borderColor: "var(--border)",
                            color: "var(--text-primary)",
                        }}
                    >
                        View Documentation
                    </button>

                </div>
            </div>
        </section>
    );
}

export default Banner;