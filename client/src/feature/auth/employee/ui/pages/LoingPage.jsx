import { Mail, Lock, Building2, KeyRound, Eye, EyeOff } from "lucide-react";
import useEmployeeHook from "../../hooks/useEmpeloyeeHook";



export default function Login() {

    const { register, handleSubmit, errors, hide, SetHide, onSubmit } = useEmployeeHook.useLogin()

    return (
        <section className="min-h-screen bg-[#F5F8FF] flex items-center justify-center px-5">
            <div className="w-full max-w-md">

                {/* Logo */}

                <div className="text-center mb-10">
                    <h1 className="text-5xl font-bold text-indigo-600">
                        Nexus ERP
                    </h1>

                    <p className="mt-3 text-slate-600">
                        Enterprise Resource Planning
                    </p>
                </div>

                {/* Card */}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">

                        {/* Email */}

                        <label className="text-xs font-semibold uppercase tracking-wide">
                            Email Address
                        </label>

                        <div className="mt-2 flex h-12 items-center rounded-lg border px-4">
                            <Mail size={18} className="text-slate-400" />

                            <input
                                {...register("email")}
                                className="ml-3 w-full outline-none"
                                placeholder="name@company.com"
                            />

                        </div>
                        <p>{errors.email?.message}</p>
                        {/* Password */}

                        <div className="mt-6 flex items-center justify-between">
                            <label className="text-xs font-semibold uppercase tracking-wide">
                                Password
                            </label>

                            <button className="text-xs text-indigo-600">
                                Forgot password?
                            </button>
                        </div>

                        <div className="mt-2 flex h-12 items-center rounded-lg border border-slate-300 px-4">

                            <Lock size={18} className="text-slate-400" />

                            <input
                                {...register("password")}
                                type={hide ? "text" : "password"}
                                className="ml-3 flex-1 outline-none"
                                placeholder="••••••••"
                            />

                            <button
                                type="button"
                                onClick={() => SetHide(!hide)}
                                className="text-slate-500 transition hover:text-indigo-600"
                            >
                                {hide ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>

                        </div>

                        <p className="mt-1 text-sm text-red-500">
                            {errors.password?.message}
                        </p>
                        {/* Login */}

                        <button className="mt-7 h-12 w-full rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700">
                            Sign In
                        </button>

                        {/* Divider */}

                        <div className="my-7 text-center text-xs uppercase text-slate-500">
                            OR CONTINUE WITH
                        </div>

                        {/* Buttons */}

                        <div className="grid grid-cols-2 gap-4">

                            <button className="flex h-11 items-center justify-center gap-2 rounded-lg border hover:bg-slate-50">
                                <Building2 size={18} />
                                SSO
                            </button>

                            <button className="flex h-11 items-center justify-center gap-2 rounded-lg border hover:bg-slate-50">
                                <KeyRound size={18} />
                                Token
                            </button>

                        </div>

                    </div>
                </form>

                {/* Footer */}

                <p className="mt-8 text-center text-sm text-slate-500">
                    By signing in, you agree to our{" "}
                    <span className="text-indigo-600">
                        Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="text-indigo-600">
                        Privacy Policy
                    </span>.
                </p>

            </div>
        </section>
    );
}