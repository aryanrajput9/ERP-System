import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import employeSchema from "../schema/employe.authSchema";
import employeeApi from "../../../../app/Api/employeAuth.api";
import { useDispatch } from "react-redux";
import { setAccessToken, setEmployeeData, setError } from "../state/employeeSlice";
import { useNavigate } from "react-router";



const useEmployeeHook = {

    useLogin: () => {
        const { register, handleSubmit, formState: { errors }, reset } = useForm({
            resolver: zodResolver(employeSchema.loginSchema)
        });
        const [hide, SetHide] = useState();
        const dispatch = useDispatch();
        const navigate = useNavigate();

        const onSubmit = async (data) => {
            const resp = await employeeApi.loginApi(data)
            dispatch(setEmployeeData(resp))
            dispatch(setAccessToken(resp.accessToken))
            dispatch(setError(resp.message))
            if (resp.role === "Employee") {
                navigate("/dashboard/home");
            } else {
                navigate("/admin");
            }
            reset()
        };

        //return

        return {
            register, handleSubmit, errors, hide, SetHide,
            onSubmit
        }
    },
    useGetMe: () => {
        const resp = employeeApi.getMe()
        return resp

    }
};


export default useEmployeeHook