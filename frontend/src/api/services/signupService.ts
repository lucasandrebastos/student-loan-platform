import type { SignUpPayload } from "@/types/signup";
import api from "../apiClient";

export const signup = async (payload: SignUpPayload) => {
  const response = await api.post("/register", payload);
  return response.data;
};
