export default function CTASection() {
    return (
        <>
            {/* CTA */}
            <section className="border-t border-[#E2E8F0] bg-[var(--background)] py-28">
                <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">

                    <h2 className="max-w-3xl text-4xl font-bold leading-tight text-slate-900">
                        Ready to upgrade your infrastructure?
                    </h2>

                    <p className="mt-8 max-w-2xl text-[15px] leading-9 text-slate-600">
                        Deploy Nexus ERP today and bring unprecedented rigor to your
                        organizational management. Join the industry leaders who demand
                        precision.
                    </p>

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

                        <button className="rounded-sm bg-indigo-600 px-10 py-4 font-semibold text-white shadow-lg transition hover:bg-indigo-700">
                            Start Free Trial
                        </button>

                        <button className="rounded-sm border border-slate-300 bg-white px-10 py-4 font-semibold text-slate-800 transition hover:bg-slate-100">
                            Contact Sales
                        </button>

                    </div>

                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[#E2E8F0] bg-[var(--background)]">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">

                    <div className="flex flex-wrap items-center gap-4">
                        <h3 className="text-3xl font-bold text-indigo-600">
                            Nexus ERP
                        </h3>

                        <span className="text-base text-slate-600">
                            © 2024 Nexus Enterprise Solutions. All rights reserved.
                        </span>
                    </div>

                    <ul className="flex flex-wrap items-center gap-8 text-base text-slate-600">
                        <li>
                            <a href="#" className="transition hover:text-indigo-600">
                                Privacy Policy
                            </a>
                        </li>

                        <li>
                            <a href="#" className="transition hover:text-indigo-600">
                                Terms of Service
                            </a>
                        </li>

                        <li>
                            <a href="#" className="transition hover:text-indigo-600">
                                Security
                            </a>
                        </li>

                        <li>
                            <a href="#" className="transition hover:text-indigo-600">
                                Status
                            </a>
                        </li>
                    </ul>

                </div>
            </footer>
        </>
    );
}