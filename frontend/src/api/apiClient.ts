import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// axiosClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     const { response } = error;
//     if (response.status === 401) {
//       localStorage.removeItem("ACCESS_TOKEN");
//       // window.location.reload();
//     } else if (response.status === 404) {
//       //Show not found
//     }

//     throw error;
//   }
// );

export default api;
