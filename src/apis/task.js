import API from "./index";

export const apiGetTasks = () => API.get("/api/tasks");
export const apiCreateTask = (data) => API.post("/api/tasks", data);
export const apiUpdateTask = (data) => API.put(`/api/tasks/${data.id}`, data);
export const apiDeleteTask = (id) => API.delete(`/api/tasks/${id}`);
