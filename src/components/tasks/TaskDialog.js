import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    TextField,
} from "@mui/material";

import DateTimePicker from "@mui/lab/DateTimePicker";
import {makeStyles} from "@mui/styles";
import React, {useState} from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const useStyles = makeStyles({
    root: {},
    content: {
        padding: 10,
    },
    actions: {
        margin: 20,
    },
});

const TaskDialog = (props) => {
    const {title, open, setOpen, onSubmit, submitLabel, data} = props;

    const [name, setName] = useState(data?.name);
    const [description, setDescription] = useState(data?.description);
    const [time, setTime] = useState(new Date(data?.time || ""));
    const classes = useStyles();

    const handleSubmit = () => {
        onSubmit({name, description, time});
        setOpen(false);
    };

    const handleClose = () => {
        setName("");
        setDescription("");
        setTime();
        setOpen(false);
    };

    return (
        <Dialog maxWidth='md' fullWidth className={classes.root} open={open}>
            <DialogTitle>{title}</DialogTitle>
            <div className={classes.content}>
                <TextField
                    label='Name'
                    fullWidth
                    margin='dense'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    label='Description'
                    fullWidth
                    margin='dense'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        label='Time picker'
                        value={time}
                        onChange={(newTime) => {
                            setTime(newTime);
                        }}
                        renderInput={(params) => (
                            <TextField fullWidth margin='dense' {...params} />
                        )}
                    />
                </LocalizationProvider>
            </div>
            <DialogActions className={classes.actions}>
                <Button onClick={handleSubmit} variant='contained'>
                    {submitLabel}
                </Button>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default TaskDialog;
