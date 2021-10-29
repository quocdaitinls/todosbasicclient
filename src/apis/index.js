import axios from "axios";

const API = axios.create({
    withCredentials: true,
    baseURL: "https://todosbasic.herokuapp.com/",
});

export default API;
