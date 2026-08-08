import {
    ChartNoAxesCombined,
    Landmark,
    ShieldCheck,
    Clock3,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
    {
        variant: "analytics",
        className: "col-span-12 lg:col-span-8",
        icon: <ChartNoAxesCombined size={28} />,
        title: "Real-Time Analytics Core",
        description:
            "Aggregate operational data instantly. Our proprietary querying engine provides millisecond latency on complex organizational reports, enabling decisive executive action.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsjSb7BzzXXWNo2mWbD8P3VhWjPkNHqMS_X4t910u9QfmMkjLrP_IAA7Nm&s=10",
    },
    {
        variant: "payroll",
        className: "col-span-12 lg:col-span-4",
        icon: <Landmark size={28} />,
        title: "Deterministic Payroll",
        description:
            "Automate complex tax routing, multi-currency disbursements, and retroactive adjustments with zero margin for error.",
        list: [
            "Multi-jurisdiction compliance",
            "Automated ledger syncing",
            "Batch processing API",
        ],
    },
    {
        variant: "simple",
        className: "col-span-12 lg:col-span-4",
        icon: <ShieldCheck size={28} />,
        title: "Role-Based Access Control",
        description:
            "Secure, granular permissions ensure data integrity. Employees access only what they need through a streamlined portal.",
    },
    {
        variant: "time",
        className: "col-span-12 lg:col-span-8",
        icon: <Clock3 size={28} />,
        title: "Precision Time Tracking",
        description:
            "Unify biometric data, mobile check-ins, and shift scheduling into a single immutable ledger.",
        image: "https://images.stockcake.com/public/4/0/1/4010e975-0377-41f0-b4d8-f87ebe07f8af_large/analytics-dashboard-display-stockcake.jpg",
        link: "Explore the Time API",
    },
];

export default function FeatureSection() {
    return (
        <section className="bg-[var(--background)] py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <h2 className="text-4xl font-bold text-[var(--text-primary)]">
                        Engineered for Operational Clarity
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
                        Our modular architecture ensures data integrity across every
                        vertical of your organization.
                    </p>
                </div>

                {/* Features */}

                <div className="grid grid-cols-12 gap-6">
                    {features.map((item, index) => (
                        <FeatureCard
                            key={index}
                            {...item}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}