import axios from "axios";

const AClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {},
  // timeout: 5000,
});

// Request Interceptor
AClient.interceptors.request.use(
  async (axiosConfig) => {
    const reConfig = axiosConfig;
    reConfig.headers["Content-Type"] = "application/json";
    return reConfig;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
AClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.message === "Network Error") {
      const errorMessage = {
        response: {
          data: {
            message:
              "Network Error. Please check if you are connected to the internet.",
          },
        },
      };
      return Promise.reject(errorMessage);
    }

    return Promise.reject(error);
  }
);

export const ApiClient = AClient;
