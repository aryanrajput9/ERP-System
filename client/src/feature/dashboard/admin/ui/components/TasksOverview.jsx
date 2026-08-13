import { ChevronDown } from "lucide-react";

export default function TasksOverview() {
    return (
        <div
            className="w-6/12 rounded-2xl border p-5 shadow-sm"
            style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
            }}
        >
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2
                    className="text-base font-semibold"
                    style={{ color: "var(--text-primary)" }}
                >
                    Tasks Overview
                </h2>

                <button
                    className="flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition"
                    style={{
                        borderColor: "var(--border)",
                        backgroundColor: "var(--input-bg)",
                        color: "var(--text-primary)",
                    }}
                >
                    This Week
                    <ChevronDown size={16} style={{ color: "var(--text-muted)" }} />
                </button>
            </div>

            {/* Content */}
            <div className="mt-6 flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
                {/* Donut */}
                <div className="relative flex items-center justify-center">
                    <div className="h-40 w-40 rounded-full bg-[conic-gradient(#2563eb_0_21%,#16a34a_21%_85%,#ea580c_85%_100%)] p-4">
                        <div
                            className="flex h-full w-full flex-col items-center justify-center rounded-full"
                            style={{ backgroundColor: "var(--card)" }}
                        >
                            <span
                                className="text-4xl font-bold"
                                style={{ color: "var(--text-primary)" }}
                            >
                                28
                            </span>

                            <span
                                className="mt-1 text-sm"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                Total
                            </span>
                        </div>
                    </div>
                </div>

                {/* Legend */}
                <div className="space-y-5">
                    {/* Completed */}
                    <div className="flex items-start gap-3">
                        <span className="mt-1 h-3 w-3 rounded-sm bg-green-500" />

                        <div>
                            <p
                                className="text-sm font-medium"
                                style={{ color: "var(--text-primary)" }}
                            >
                                Completed
                            </p>

                            <p
                                className="text-xs"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                18 (64%)
                            </p>
                        </div>
                    </div>

                    {/* In Progress */}
                    <div className="flex items-start gap-3">
                        <span className="mt-1 h-3 w-3 rounded-sm bg-blue-500" />

                        <div>
                            <p
                                className="text-sm font-medium"
                                style={{ color: "var(--text-primary)" }}
                            >
                                In Progress
                            </p>

                            <p
                                className="text-xs"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                6 (21%)
                            </p>
                        </div>
                    </div>

                    {/* Pending */}
                    <div className="flex items-start gap-3">
                        <span className="mt-1 h-3 w-3 rounded-sm bg-orange-500" />

                        <div>
                            <p
                                className="text-sm font-medium"
                                style={{ color: "var(--text-primary)" }}
                            >
                                Pending
                            </p>

                            <p
                                className="text-xs"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                4 (15%)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}