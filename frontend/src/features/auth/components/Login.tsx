import { useState } from "react";
import { useForm } from "react-hook-form";

import axiosClient from "@/axios-client";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../../redux/AuthSlice";
import { useNavigate } from "react-router";

type LoginCredentials = {
  email: string;
  password: string;
};

export default function LoginPlatform() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>();

  const onSubmit = async (data: LoginCredentials) => {
    try {
      setIsLoading(true);
      const response = await axiosClient.post("/login", data);
      const token = response.data.token;
      localStorage.setItem("ACCESS_TOKEN", token);
      dispatch(loginSuccess(token));

      setIsLoading(false);
      navigate("/dashboard");
    } catch (error) {
      setIsLoading(false);
      alert(`login invalido ${error}`);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-center text-gray-900">
          Sign in
        </h3>
        <p className="mt-2 text-center text-sm text-gray-600">
          Enter your email and password to access your account
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="login-email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="login-email"
            type="email"
            placeholder="Enter your email"
            required
            {...register("email")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="login-password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            id="login-password"
            type="password"
            placeholder="Enter your password"
            required
            {...register("password")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <div className="mt-4 text-center">
        <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
          Forgot your password?
        </a>
      </div>
    </div>
  );
}
