
import "../index.css";
import { RouterProvider } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import useEmployeeHook from "../feature/auth/employee/hooks/useEmpeloyeeHook";
import { setEmployeeData, isLoading } from "../feature/auth/employee/state/employeeSlice";
import { Toaster } from "react-hot-toast";
import Notification from "../shared/ui/components/Notification";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMe = async () => {
      try {
        const resp = await useEmployeeHook.useGetMe();
        dispatch(setEmployeeData(resp));
      } catch (err) {
        console.log(err);
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
