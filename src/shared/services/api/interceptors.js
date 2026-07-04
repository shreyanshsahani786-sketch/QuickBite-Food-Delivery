import api from "./axios";

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error("Unauthorized");
        }

        if (error.response && error.response.status === 500) {
            console.error("Server Error");
        }

        return Promise.reject(error);
    }
);

export default api;