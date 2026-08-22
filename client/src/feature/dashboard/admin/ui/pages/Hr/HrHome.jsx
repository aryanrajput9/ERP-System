import React from 'react'
import GreetingBanner from '../../components/hr/GreetingBanner';
import { useSelector } from 'react-redux';
import StatsCards from '../../components/StatsCards';

function HrHome() {
    const { name } = useSelector((state) => state.employee.employee);
    console.log(name)

    return (
        <div>
            <GreetingBanner name={name} />;
            <StatsCards />
        </div>
    )
}

export default HrHome
