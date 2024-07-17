import axios from "axios";

const apiFakeStore = "https://api.escuelajs.co/api/v1";

const axiosStore = axios.create({
    baseURL: apiFakeStore,
    headers: { 'Content-Type': 'application/json' }
});

export default axiosStore;