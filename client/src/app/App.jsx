
import "../index.css";
import { RouterProvider } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import useEmployeeHook from "../feature/auth/employee/hooks/useEmpeloyeeHook";
import { setEmployeeData } from "../feature/auth/employee/state/employeeSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {

    const getMe = async () => {

      const resp = await useEmployeeHook.useGetMe();
      dispatch(setEmployeeData(resp))
    }
    getMe()
  }, [dispatch])
  return (
    <div>
      <RouterProvider router={AppRoutes}></RouterProvider>
    </div>
  )
}

export default App
