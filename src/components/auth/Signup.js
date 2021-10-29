import React from "react";
import Input from "./Input";
import {useAuthCtx} from "../../context/authContext";

const Signup = () => {
    const {username, setUsername, password, setPassword, name, setName} =
        useAuthCtx();

    return (
        <>
            <Input
                name='name'
                label='Your name'
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                name='username'
                label='Username'
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

export default Signup;
