import axios from "axios";

const API = axios.create({
    baseURL: "https://todosbasic.herokuapp.com",
});

API.interceptors.request.use((req) => {
    if (window.localStorage.getItem("token")) {
        req.headers.Authorization = `Bearer ${JSON.parse(
            window.localStorage.getItem("token")
        )}`;
    }
    return req;
});

export default API;
