import {compareAsc, compareDesc} from "date-fns";

export const compareTaskByDateDesc = (task1, task2) => {
    const date1 = new Date(task1.time);
    const date2 = new Date(task2.time);
    return compareDesc(date1, date2);
};

export const compareTaskByDateAsc = (task1, task2) => {
    const date1 = new Date(task1.time);
    const date2 = new Date(task2.time);
    return compareAsc(date1, date2);
};
