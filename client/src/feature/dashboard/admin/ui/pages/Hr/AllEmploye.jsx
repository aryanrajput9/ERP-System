import React from 'react'
import StatsCards from '../../components/StatsCards';
import EmployeeDirectory from '../../components/hr/EmployeeDirectory';
import EmployeeSidebarWidgets from './EmployeeSidebarWidgets';
import { useSelector } from 'react-redux';

function AllEmploye() {

    const { allEmploye } = useSelector((state) => state.admin)

    return (
        <div className="flex gap-5">
            <div className="flex flex-col gap-10">

                <StatsCards />
                <EmployeeDirectory allEmploye={allEmploye} />
            </div>
            <div className="flex flex-col gap-10">
                <EmployeeSidebarWidgets allEmploye={allEmploye} />
            </div>
        </div>
    )
}

export default AllEmploye
