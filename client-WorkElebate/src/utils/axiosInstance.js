import axios from "axios";

const axiosInstance = axios.create({
  // https://workelevate-server-part3.vercel.app/
  baseURL: "https://workelevate-server-part3.vercel.app",
  // baseURL: "https://workelevate-server-part3.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
