import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { Navigate, Outlet } from "react-router";

export default function PrivateRoute() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
