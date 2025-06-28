import axios from "axios";

const axiosInstance = axios.create({
  // https://career-code-server-for-recruiter-pa-nu.vercel.app/
  baseURL: "http://localhost:3000",
  // baseURL: "https://career-code-server-for-recruiter-pa-nu.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
