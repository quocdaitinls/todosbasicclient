import {Grid, TextField} from "@mui/material";
import {makeStyles} from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
    wrap: {
        margin: "7px 0",
    },
    input: {
        color: "#000",
    },
    focused: {
        color: "#f50057 !important",
    },
    rootLabel: {
        color: "#000",
    },
    rootOutlined: {
        borderWidth: "1px",
        borderColor: "#f50057 !important",
    },
}));

const Input = (props) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} className={classes.wrap}>
            <TextField
                {...props}
                variant='outlined'
                fullWidth
                required
                margin='dense'
                InputProps={{
                    classes: {
                        root: classes.input,
                        focused: classes.focused,
                        notchedOutline: classes.rootOutlined,
                    },
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.rootLabel,
                        focused: classes.focused,
                    },
                }}
            />
        </Grid>
    );
};

export default Input;
