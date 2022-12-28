import axios  from "axios";
import type { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://63ab81edfdc006ba605f9cdb.mockapi.io/user-api",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
