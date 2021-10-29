import {Button, IconButton, Toolbar, Typography} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {useAppCtx} from "../../context/appContext";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    root: {
        width: "100%",
        padding: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#C25E61",
        color: "white",
    },
    appbar: {
        backgroundColor: "red",
        color: "red",
    },
    accIcon: {
        fontSize: 30,
        color: "white",
    },
    logout: {
        color: "white",
    },
});

const Header = () => {
    const classes = useStyles();
    const {user, signout} = useAppCtx();

    return (
        <div className={classes.root}>
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    sx={{mr: 2}}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                    Tuddu
                </Typography>
            </Toolbar>
            <Toolbar>
                <Typography variant='h6' component='div'>
                    {user?.name}
                </Typography>
                <IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    sx={{ml: 2}}
                >
                    <AccountCircleIcon className={classes.accIcon} />
                </IconButton>
                <Button onClick={signout} className={classes.logout}>
                    Logout
                </Button>
            </Toolbar>
        </div>
    );
};

export default Header;
