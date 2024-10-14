import axios from "axios";

// Set base URL for your API
export const API_BASE_URL = "http://localhost:8080";

// Create axios instance
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("jwt");
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

api.interceptors.response.use(
    (response) => response, (error) => {
        if (error.response?.status === 401) {
            console.log("Unauthorized, logging out...");
            localStorage.removeItem("jwt");
        }
        return Promise.reject(error);
    }
);

export default api;
