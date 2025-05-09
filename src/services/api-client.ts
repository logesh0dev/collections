import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.VITE_APP_API_ENDPOINT,
    headers: {
        Authorization: import.meta.env.VITE_APP_API_KEY,
    },
});
