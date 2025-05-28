import type { DashboardData } from "@/types/dashboard";
import api from "../apiClient";

export const getDashboard = async (): Promise<DashboardData> => {
  const response = await api.get("/dashboard");
  return response.data;
};
