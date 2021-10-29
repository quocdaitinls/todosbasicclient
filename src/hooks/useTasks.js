import {useState} from "react";
import {
    apiCreateTask,
    apiDeleteTask,
    apiGetTasks,
    apiUpdateTask,
} from "../apis/task";

const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const res = await apiGetTasks();
        if (res.data) {
            setTasks(res.data);
        }
    };

    const createTask = async (data) => {
        const res = await apiCreateTask(data);
        if (res.data) {
            setTasks((tasks) => [...tasks, res.data]);
        }
    };

    const updateTask = async (data) => {
        const res = await apiUpdateTask(data);
        if (res.data) {
            setTasks((tasks) =>
                tasks.map((task) => (task.id === res.data.id ? res.data : task))
            );
        }
    };

    const deleteTask = async (id) => {
        const res = await apiDeleteTask(id);
        if (res.data) {
            const {taskId} = res.data;
            setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
        }
    };

    return {
        tasks,
        fetchTasks,
        createTask,
        updateTask,
        deleteTask,
    };
};

export default useTasks;
