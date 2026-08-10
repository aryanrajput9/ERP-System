import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../../../../../../shared/ui/components/Spinner";


function LeaveFilter({ setFilteredLeave, leave }) {

    const { loading } = useSelector((state) => state.leave)

    if (loading) {
        return <Spinner />
    }

    const liveStatus = (status = "All") => {

        const data =
            status === "All"
                ? leave :
                leave.filter((elem) => elem.status === status)
        setFilteredLeave(data)
    }

    return (
        <div className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-2 ">

            <button onClick={() => liveStatus("All")} className="rounded-xl  px-4 py-2 text-sm font-medium text-[var(--text-black)] hover:bg-[var(--hover-bg)] ">

                All
            </button>

            <button onClick={() => {
                liveStatus("Pending");


            }} className="rounded-xl px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--hover-bg)]">
                Pending
            </button>

            <button onClick={() => {
                liveStatus("Approved");

            }} className="rounded-xl px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--hover-bg)]">
                Approved
            </button>

            <button onClick={() => {
                liveStatus("Reject");

            }} className="rounded-xl px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--hover-bg)]"

            >
                Rejected
            </button>
        </div>
    );
}

export default LeaveFilter;