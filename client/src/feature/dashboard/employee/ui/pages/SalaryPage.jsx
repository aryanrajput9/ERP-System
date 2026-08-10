import { Wallet, Sparkles, ArrowRight } from "lucide-react";

export default function SalaryPage() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6">
            <div className="w-full max-w-2xl rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-10 text-center shadow-sm">

                {/* Icon */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <Wallet className="h-10 w-10" />
                </div>

                {/* Badge */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--hover-bg)] px-4 py-1 text-sm font-medium text-[var(--text-secondary)]">
                    <Sparkles className="h-4 w-4" />
                    Feature in Progress
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-[var(--text-primary)]">
                    Salary & Payroll
                </h1>

                {/* Description */}
                <p className="mt-4 text-[var(--text-secondary)] leading-7">
                    We’re working on a complete salary and payroll management experience.
                    Soon you’ll be able to view payslips, salary breakdowns, deductions,
                    bonuses, and payment history — all in one place.
                </p>

                {/* Feature list */}
                <div className="mt-8 grid gap-3 text-left sm:grid-cols-2">
                    {[
                        "Monthly payslips",
                        "Salary breakdown",
                        "Tax & deduction details",
                        "Bonus & incentives",
                        "Download PDF payslips",
                        "Payment history",
                    ].map((feature) => (
                        <div
                            key={feature}
                            className="flex items-center gap-3 rounded-2xl border border-[var(--border)] px-4 py-3"
                        >
                            <div className="h-2 w-2 rounded-full bg-emerald-500" />
                            <span className="text-sm text-[var(--text-primary)]">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <button className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600">
                    Notify me when available
                    <ArrowRight className="h-4 w-4" />
                </button>

                {/* Footer note */}
                <p className="mt-4 text-xs text-[var(--text-secondary)]">
                    Expected in a future update
                </p>
            </div>
        </div>
    );
}