import {ButtonBase, Checkbox, IconButton, Paper} from "@mui/material";
import {makeStyles} from "@mui/styles";
import React, {useEffect, useState} from "react";
import {useTaskCtx} from "../../context/taskContext";
import {formatDate} from "../../utils/formatDate";
import {mergeTask} from "../../utils/mergeTask";
import TaskDialog from "./TaskDialog";
import DeleteIcon from "@mui/icons-material/Delete";

const useStyles = makeStyles({
    root: {
        width: "100%",
        margin: "10px 0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "0 10px",
    },
    radioBox: {
        margin: 10,
    },
    radioBtn: {
        margin: "0 20px",
    },
    label: {
        flexGrow: 1,
        padding: "10px !important",
        display: "flex",
        flexDirection: "column",
        rowGap: 4,
        alignItems: "left !important",
    },
    name: {
        width: "100%",
        fontSize: 16,
        fontWeight: "bold",
    },
    description: {
        width: "100%",
        fontSize: 14,
    },
    time: {
        fontSize: 14,
        width: "100%",
    },
    actions: {
        padding: 10,
    },
});

const Task = (props) => {
    const {data} = props;
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [done, setDone] = useState(data.isDone);
    const {updateTask, deleteTask} = useTaskCtx();

    const handleChange = () => {
        setDone((done) => !done);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const onSubmit = (newData) => {
        updateTask(mergeTask(data, newData));
    };

    const onDelete = () => {
        deleteTask(data.id);
    };

    useEffect(() => {
        if (done !== data.isDone) updateTask(mergeTask(data, {isDone: done}));
    }, [done]);

    return (
        <Paper elevation={3} className={classes.root}>
            <div className={classes.radioBox}>
                <Checkbox
                    checked={done}
                    onChange={handleChange}
                    value={done}
                    className={classes.radioBtn}
                />
            </div>
            <ButtonBase
                onClick={handleClickOpen}
                className={classes.label}
                component='div'
            >
                <span className={classes.name}>{data.name}</span>
                <span className={classes.description}>{data.description}</span>
                <span className={classes.time}>{formatDate(data.time)}</span>
            </ButtonBase>
            <div className={classes.actions}>
                <IconButton onClick={onDelete}>
                    <DeleteIcon />
                </IconButton>
            </div>
            <TaskDialog
                title='Update task'
                open={open}
                setOpen={setOpen}
                onSubmit={onSubmit}
                submitLabel='Update'
                data={data}
            />
        </Paper>
    );
};

export default Task;
