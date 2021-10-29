import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {Button, Grid, Paper, Typography} from "@mui/material";
import {useAuthCtx} from "../../context/authContext";
import Signup from "./Signup";
import Signin from "./Signin";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    root: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    form: {
        width: "30%",
        height: "calc(100% - 200px)",
        borderRadius: 15,
        padding: 30,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        margin: "20px 0",
    },
    inputs: {
        width: "100%",
        margin: "80px 0 30px 0",
    },
    button: {
        margin: "10px 0",
        backgroundColor: "#f50057",
    },
});

const Form = (props) => {
    const classes = useStyles();
    const {isSignin, setIsSignin, resetInputs, handleSubmit, isDisableSubmit} =
        useAuthCtx();

    useEffect(() => {
        setIsSignin(props.isSignin);
    }, []);

    return (
        <Grid container className={classes.root}>
            <Paper elevation={6} component='div' className={classes.form}>
                <Typography
                    align='center'
                    variant='h4'
                    className={classes.title}
                >
                    {isSignin ? "Sign In" : "Sign Up"}
                </Typography>
                <Grid className={classes.inputs}>
                    {isSignin ? <Signin /> : <Signup />}
                </Grid>
                <Button
                    component={Link}
                    to={isSignin ? "signup" : "signin"}
                    onClick={() => {
                        setIsSignin((isSignin) => !isSignin);
                        resetInputs();
                    }}
                >
                    {isSignin
                        ? "Don't have an account? Register now"
                        : "Already have an account? Signin"}
                </Button>
                <Button
                    className={classes.button}
                    color='secondary'
                    variant='contained'
                    component='div'
                    fullWidth
                    size='large'
                    disabled={isDisableSubmit()}
                    onClick={() => handleSubmit()}
                >
                    {isSignin ? "Signin" : "Signup"}
                </Button>
            </Paper>
        </Grid>
    );
};

export default Form;
