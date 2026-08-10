import React, { useEffect, useState } from 'react'
import StatCard from '../components/StatCard';
import { CalendarCheck2 } from 'lucide-react';
import TopBar from '../components/leave/TopBar';
import LeaveFilter from '../components/leave/LeaveFilter';
import LeaveTable from '../components/leave/LeaveTable';
import ApplyLeaveForm from '../components/leave/ApplyLeaveForm';
import useEmployeeLeaveHook from '../../hooks/useEmployeeLeaveHook';
import { useDispatch } from 'react-redux';
import { setError, setLeave } from '../../state/employeeLeaveSlice';




function LeavePage() {

    const [hide, setHide] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        const getLeaveData = async () => {

            try {

                const resp = await useEmployeeLeaveHook.getLeaveHook();
                dispatch(setLeave(resp))

            } catch (error) {
                dispatch(setError(error))
            }
        };

        getLeaveData()

    }, [dispatch])



    return (
        <div className="space-y-6 p-4 bg-[var(--background)] min-h-screen">

            {/* Top Bar */}
            <TopBar setHide={setHide} />

            {/* Stats */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                <StatCard
                    icon={<CalendarCheck2 size={28} />}
                    label="Total Leaves"
                    badge="Total leaves this year"
                    color="primary"
                    value={24}
                />

                <StatCard
                    icon={<CalendarCheck2 size={28} />}
                    label="Approved"
                    badge="Approved leaves"
                    color="success"
                    value={12}
                />

                <StatCard
                    icon={<CalendarCheck2 size={28} />}
                    label="Pending"
                    badge="Pending requests"
                    color="warning"
                    value={5}
                />

                <StatCard
                    icon={<CalendarCheck2 size={28} />}
                    label="Rejected"
                    badge="Rejected requests"
                    color="danger"
                    value={3}
                />
            </div>

            {/* Filter + Sort */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <LeaveFilter />

                <button className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--hover-bg)]">
                    Sort by: Newest
                </button>
            </div>

            {/* Table */}
            <LeaveTable />

            {/* Apply Form */}
            {hide && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                    <ApplyLeaveForm hide={hide} setHide={setHide} />
                </div>
            )}
        </div>
    )
}

export default LeavePage
