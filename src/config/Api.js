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

// Add a request interceptor to inject JWT dynamically before each request
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("jwt");
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Add a response interceptor to handle errors globally (optional)
api.interceptors.response.use(
    (response) => response, // Just return the response if it's successful
    (error) => {
        if (error.response?.status === 401) {
            // Handle unauthorized errors globally, e.g., redirect to login
            console.log("Unauthorized, logging out...");
            localStorage.removeItem("jwt");
            // You can also trigger a logout action or redirect the user
        }
        return Promise.reject(error);
    }
);

export default api;
