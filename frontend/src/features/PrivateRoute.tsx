import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { Navigate, Outlet } from "react-router";
import type { JSX } from "react";

export default function PrivateRoute() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
