import {Button, Container, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useTaskCtx} from "../../context/taskContext";
import Header from "./Header";
import TaskDialog from "./TaskDialog";
import Task from "./Task";
import AddIcon from "@mui/icons-material/Add";
import {makeStyles} from "@mui/styles";
import {compareTaskByDateDesc} from "../../utils/compareTaskByDate.js";

const useStyles = makeStyles({
    root: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    main: {
        flexGrow: 1,
        padding: 20,
    },
    section: {
        margin: "20px 0 10px 0",
    },
});

const TaskPage = () => {
    const classes = useStyles();
    const {tasks, fetchTasks, createTask} = useTaskCtx();
    const [open, setOpen] = useState(false);

    const tasksInProgress = tasks
        .filter((task) => !task.isDone)
        .sort(compareTaskByDateDesc)
        .map((task) => <Task key={task.id} data={task} />);

    const tasksDone = tasks
        .filter((task) => task.isDone)
        .sort(compareTaskByDateDesc)
        .map((task) => <Task key={task.id} data={task} />);

    const onSubmit = (data) => {
        createTask(data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className={classes.root}>
            <Header />
            <Container className={classes.main}>
                <Button
                    variant='contained'
                    onClick={() => setOpen(true)}
                    startIcon={<AddIcon />}
                >
                    Create new task
                </Button>
                <TaskDialog
                    title='Create new task'
                    open={open}
                    setOpen={setOpen}
                    onSubmit={onSubmit}
                    submitLabel='Create'
                />
                <div className={classes.section}>
                    <Typography variant='h6'>In Progress</Typography>
                    {tasksInProgress}
                </div>
                <div className={classes.section}>
                    <Typography variant='h6'>Done</Typography>
                    {tasksDone}
                </div>
            </Container>
        </div>
    );
};

export default TaskPage;
