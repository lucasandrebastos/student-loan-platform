import api from "../apiClient";
import type { LoginPayload, LoginResponse } from "@/types/auth";
import type { User } from "@/types/user";

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/login", payload);
  return response.data;
};

export const getProfile = async (): Promise<User> => {
  const response = await api.get("/me");
  return response.data;
};
