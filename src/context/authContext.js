import React, {useState, useContext} from "react";
import {useAppCtx} from "./appContext";

const AuthContext = React.createContext();

export const useAuthCtx = () => {
    return useContext(AuthContext);
};

const AuthProvider = (props) => {
    const {signin, signup} = useAppCtx();

    const [isSignin, setIsSignin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const resetInputs = () => {
        setUsername("");
        setPassword("");
        setName("");
    };

    const handleSubmit = () => {
        if (isSignin) signin({username, password});
        else signup({name, username, password});
    };

    const isDisableSubmit = () => {
        if (!username || !password) return true;
        if (!isSignin && !name) return true;
        return false;
    };

    const value = {
        isSignin,
        setIsSignin,
        username,
        setUsername,
        password,
        setPassword,
        name,
        setName,
        resetInputs,
        handleSubmit,
        isDisableSubmit,
    };

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
