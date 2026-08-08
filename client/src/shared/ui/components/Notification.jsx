import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../../../feature/auth/employee/state/employeeSlice";

function Notification() {

    const error = useSelector((state) => state.employee.error);
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            toast.error(error);


        }

    }, [error, dispatch])

    return null

}

export default Notification
