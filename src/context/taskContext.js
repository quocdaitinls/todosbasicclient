import React, {useContext} from "react";
import useTasks from "../hooks/useTasks";

const TaskContext = React.createContext();

export const useTaskCtx = () => {
    return useContext(TaskContext);
};

const TaskProvider = (props) => {
    const {tasks, fetchTasks, createTask, updateTask, deleteTask} = useTasks();

    const value = {
        tasks,
        fetchTasks,
        createTask,
        updateTask,
        deleteTask,
    };
    return (
        <TaskContext.Provider value={value}>
            {props.children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;
