import axios from "axios";

const axiosOptions = {
  baseURL: "https://kmin-ecommerce-be.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
};
const axiosClient = axios.create(axiosOptions);

// Interceptors
axiosClient.interceptors.request.use(
  (request) => {
    if (!request.headers.Authorization) {
      request.headers.Authorization = "Bearer";
    }
    return request;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error.response?.data || error)
);

export default axiosClient;
