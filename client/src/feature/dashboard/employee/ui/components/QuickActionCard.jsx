const QuickActionCard = ({
    icon,
    title,
    active = false,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className={`group flex h-32 w-full flex-col items-center justify-center rounded-2xl border transition-all duration-300
      ${active
                    ? "border-indigo-600 text-indigo-600 shadow-sm"
                    : "border-gray-200 bg-[var(--background)] text-[var(--text-primary)] hover:border-indigo-500 hover:text-indigo-600 hover:shadow-md"
                }`}
        >
            <div
                className={`mb-3 transition-all duration-300 ${active ? "text-[var(--text-primary)]" : "group-hover:text-[var(--hover-text)]"
                    }`}
            >
                {icon}
            </div>

            <h3
                className={`text-xl font-medium ${active ? "text-[var(--text-primary)]" : "text-[var(--text-primary)]"
                    }`}
            >
                {title}
            </h3>
        </button>
    );
};

export default QuickActionCard;