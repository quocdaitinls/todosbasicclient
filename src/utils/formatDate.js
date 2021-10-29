import {format} from "date-fns";

export const formatDate = (date) => {
    if (typeof date === "string") date = new Date(date);
    return format(date, "dd-MMM HH:mm");
};
