const logos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
];

export default function TrustedBy() {
    return (
        <section className="w-full border-y border-gray-200 bg-[var(--background)] py-20">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}
                <h4 className="text-center text-xs font-semibold uppercase tracking-[4px] text-gray-500">
                    Trusted By Forward-Thinking Enterprises
                </h4>

                {/* Logos */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-14">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex h-14 w-36 items-center justify-center opacity-60 transition duration-300 hover:opacity-100"
                        >
                            <img
                                src={logo}
                                alt="Company Logo"
                                className="max-h-10 object-contain grayscale hover:grayscale-0"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}