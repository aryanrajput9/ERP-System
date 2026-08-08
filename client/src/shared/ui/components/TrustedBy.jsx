const logos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
];

export default function TrustedBy() {
    return (
        <section className="bg-[var(--background)] py-20">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <h4 className="text-center text-xs font-semibold uppercase tracking-[4px] text-[var(--text-secondary)]">
                    Trusted By Forward-Thinking Enterprises
                </h4>

                {/* Logos */}

                <div className="mt-12 flex flex-wrap items-center justify-center gap-14">

                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex h-14 w-36 items-center justify-center transition-all duration-300 hover:scale-105"
                            style={{
                                opacity: 0.65,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.opacity = "1";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.opacity = "0.65";
                            }}
                        >
                            <img
                                src={logo}
                                alt={`Company Logo ${index + 1}`}
                                className="max-h-10 object-contain grayscale transition-all duration-300 hover:grayscale-0"
                            />
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}