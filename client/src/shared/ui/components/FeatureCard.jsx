import { CheckCircle2 } from "lucide-react";

export default function FeatureCard({
    variant,
    className,
    icon,
    title,
    description,
    image,
    list,
    link,
}) {
    return (
        <div
            className={`
      ${className}
      rounded-[18px]
      border
      border-[#D9E1EC]
    bg-[var(--background)]
      p-8
      `}
        >
            {/* Analytics */}
            {variant === "analytics" && (
                <div className="flex h-full flex-col">
                    <div className="text-indigo-600">{icon}</div>

                    <h3 className="mt-6 text-[30px] font-semibold text-slate-900">
                        {title}
                    </h3>

                    <p className="mt-4 max-w-3xl text-[15px] leading-8 text-slate-600">
                        {description}
                    </p>

                    <div className="mt-10">
                        <img
                            src={image}
                            alt=""
                            className="h-[260px] w-full rounded-sm object-cover"
                        />
                    </div>
                </div>
            )}

            {/* Payroll */}
            {variant === "payroll" && (
                <div className="flex h-full flex-col">
                    <div className="text-indigo-600">{icon}</div>

                    <h3 className="mt-6 text-[30px] font-semibold">{title}</h3>

                    <p className="mt-4 text-[15px] leading-8 text-slate-600">
                        {description}
                    </p>

                    <div className="mt-auto space-y-5 pt-12">
                        {list.map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <CheckCircle2
                                    size={18}
                                    className="text-green-600"
                                />
                                <span className="text-md text-slate-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Simple */}
            {variant === "simple" && (
                <>
                    <div className="text-indigo-600">{icon}</div>

                    <h3 className="mt-6 text-[30px] font-semibold">
                        {title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-8 text-slate-600">
                        {description}
                    </p>
                </>
            )}

            {/* Time */}
            {variant === "time" && (
                <div className="flex h-full flex-col lg:flex-row">
                    <div className="flex flex-1 flex-col pr-8">
                        <div className="text-indigo-600">{icon}</div>

                        <h3 className="mt-6 text-[30px] font-semibold">
                            {title}
                        </h3>

                        <p className="mt-4 text-[15px] leading-8 text-slate-600">
                            {description}
                        </p>

                        <button className="mt-8 w-fit font-semibold text-indigo-600">
                            {link} →
                        </button>
                    </div>

                    <div className="mt-8 lg:mt-0 lg:w-[42%]">
                        <img
                            src={image}
                            alt=""
                            className="h-full min-h-[240px] w-full rounded-sm object-cover"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}