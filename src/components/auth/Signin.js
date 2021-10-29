import React from "react";
import Input from "./Input";
import {useAuthCtx} from "../../context/authContext";

const Signin = () => {
    const {username, setUsername, password, setPassword} = useAuthCtx();

    return (
        <>
            <Input
                name='username'
                label='Username'
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                name='password'
                label='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </>
    );
};

export default Signin;
