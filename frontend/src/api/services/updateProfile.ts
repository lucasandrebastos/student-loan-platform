import type { User } from "@/types/user";
import api from "../apiClient";

export const update = async (payload: User) => {
  const response = await api.put("/me", payload);
  return response.data;
};
