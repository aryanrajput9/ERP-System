import React from 'react'

function Spinner() {
    return (



        <div className="min-h-[60vh] flex items-center justify-center bg-[var(--bg)]">
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-10 py-8 shadow-sm">

                {/* Spinner */}
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-[var(--border)] border-t-[var(--primary)]"></div>

                {/* Text */}
                <div className="text-center">
                    <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                        Loading...
                    </h2>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">
                        Please wait while we fetch your leave records.
                    </p>
                </div>
            </div>
        </div>
    )

}

export default Spinner
