import api from "../apiClient";

export async function getAllSimulations() {
  const response = await api.get("/simulations");
  return response.data;
}

export async function deleteSimulationById(id: string) {
  const response = await api.delete(`/simulations/${id}`);
  return response.data;
}
