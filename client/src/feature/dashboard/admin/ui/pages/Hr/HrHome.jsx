
import GreetingBanner from '../../components/hr/GreetingBanner';
import { useDispatch, useSelector } from 'react-redux';
import StatsCards from '../../components/StatsCards';
import AttendanceLeaveOverview from '../../components/hr/AttendanceLeaveOverview';
import RecentEmployees from '../../components/hr/RecentEmployees';
import HrSideCards from '../../components/hr/HrSideCards';
import useAllEmployeeData from '../../../hooks/useAllEmployeData';
import { useEffect } from 'react';
import { setAllAttendanceHistory, setAllEmploye, setAllLeave } from '../../../state/adminSlice';
import allLeaveDataHook from '../../../hooks/allLeaveDataHook';

function HrHome() {
    const { name } = useSelector((state) => state.employee.employee);
    const dispatch = useDispatch()

    useEffect(() => {

        const allEmploye = async () => {

            const resp = await useAllEmployeeData.getAllEmployee();
            dispatch(setAllEmploye(resp));


            const resps = await useAllEmployeeData.getAllEmployeeAttendanceHistory()

            dispatch(setAllAttendanceHistory(resps.attendance));

            const leave = await allLeaveDataHook.getAllLeave();

            dispatch(setAllLeave(leave))

            return { resp, resps, leave }
        };

        allEmploye()

    }, [dispatch]);






    return (
        <div className="flex  gap-5">
            <div className="flex flex-col gap-8">
                <GreetingBanner name={name} />
                <StatsCards />
                <AttendanceLeaveOverview />
                <RecentEmployees />
            </div>
            <div>
                <HrSideCards />
            </div>

        </div>
    )
}

export default HrHome
