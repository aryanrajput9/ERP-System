
import "../index.css";
import { RouterProvider } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import useEmployeeHook from "../feature/auth/employee/hooks/useEmpeloyeeHook";
import { Toaster } from "react-hot-toast";
import Notification from "../shared/ui/components/Notification";
import { setEmployeeData, setLoading } from "../feature/auth/employee/state/employeeSlice";

function App() {
  const dispatch = useDispatch();



  useEffect(() => {
    const getMe = async () => {
      try {
        const resp = await useEmployeeHook.useGetMe();
        dispatch(setEmployeeData(resp));
      } catch (err) {
        console.log(err);
        // yahan bas log karo ya logout dispatch karo
        dispatch(setLoading(false))
      }
    };

    getMe();
  }, [dispatch]);




  return (
    <div>
      <Toaster
        position="left-right"></Toaster>
      <Notification />
      <RouterProvider router={AppRoutes}></RouterProvider>
    </div>
  )
}

export default App
