export const mergeTask = (task, newData) => {
    if (!task) return newData;
    let newTask = {};
    Object.keys(task).forEach((key) => {
        if (key in newData) newTask[key] = newData[key];
        else newTask[key] = task[key];
    });
    return newTask;
};
