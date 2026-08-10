import React from 'react'

function LeaveTableSketon() {
    return (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center dark:border-gray-700 dark:bg-gray-900" >

            {/* Icon */}
            < div className="mb-4 rounded-full bg-gray-100 p-4 dark:bg-gray-800" >
                <svg
                    className="h-10 w-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 7V3m8 4V3m-9 8h10m-11 9h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v11a2 2 0 002 2z"
                    />
                </svg>
            </div >

            {/* Text */}
            < h3 className="text-lg font-semibold text-gray-900 dark:text-white" >
                No leave requests found
            </h3 >

            <p className="mt-2 max-w-sm text-sm text-gray-500 dark:text-gray-400">
                You haven’t applied for any leave yet. Once you submit a leave request,
                it will appear here.
            </p>

            {/* Button */}
            <button className="mt-6 rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black">
                Apply Leave
            </button>
        </div >
    )
}

export default LeaveTableSketon
