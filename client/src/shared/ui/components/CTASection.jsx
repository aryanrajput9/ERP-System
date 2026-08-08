export default function CTASection() {
    return (
        <>
            {/* CTA */}
            <section className="bg-[var(--background)] py-24">
                <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
                    <h2 className="max-w-3xl text-4xl font-bold leading-tight text-[var(--text-primary)]">
                        Ready to upgrade your infrastructure?
                    </h2>

                    <p className="mt-8 max-w-2xl text-base leading-9 text-[var(--text-secondary)]">
                        Deploy Nexus ERP today and bring unprecedented rigor to your
                        organizational management. Join the industry leaders who demand
                        precision.
                    </p>

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

                        {/* Primary Button */}
                        <button
                            className="rounded-[var(--radius)] px-10 py-4 font-semibold text-[var(--text-white)] transition-all duration-300 hover:-translate-y-1"
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
                            Start Free Trial
                        </button>

                        {/* Secondary Button */}
                        <button
                            className="rounded-[var(--radius)] border px-10 py-4 font-semibold transition-all duration-300 hover:bg-[var(--hover-bg)]"
                            style={{
                                borderColor: "var(--border)",
                                color: "var(--text-primary)",
                                background: "var(--card)",
                            }}
                        >
                            Contact Sales
                        </button>

                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                className="border-t"
                style={{
                    background: "var(--background)",
                    borderColor: "var(--border)",
                }}
            >
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">

                    {/* Logo */}
                    <div className="flex flex-wrap items-center gap-4">
                        <h3
                            className="text-3xl font-bold"
                            style={{ color: "var(--primary)" }}
                        >
                            Nexus ERP
                        </h3>

                        <span className="text-base text-[var(--text-secondary)]">
                            © 2024 Nexus Enterprise Solutions. All rights reserved.
                        </span>
                    </div>

                    {/* Links */}
                    <ul className="flex flex-wrap items-center gap-8">

                        {[
                            "Privacy Policy",
                            "Terms of Service",
                            "Security",
                            "Status",
                        ].map((item) => (
                            <li key={item}>
                                <a
                                    href="#"
                                    className="transition-colors duration-300"
                                    style={{
                                        color: "var(--text-secondary)",
                                    }}
                                    onMouseEnter={(e) =>
                                    (e.currentTarget.style.color = "var(--primary)")
                                    }
                                    onMouseLeave={(e) =>
                                    (e.currentTarget.style.color =
                                        "var(--text-secondary)")
                                    }
                                >
                                    {item}
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>
            </footer>
        </>
    );
}