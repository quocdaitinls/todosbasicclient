import {useState} from "react";
import {apiGetCurrentUser, apiSignin, apiSignup} from "../apis/auth";
import {useLocalStorage} from "./useLocalStorage";

const useAuth = () => {
    const [user, setUser] = useState();
    const [token, setToken] = useLocalStorage("token", "");

    const signin = async (data) => {
        const res = await apiSignin(data);
        if (res.data) {
            setUser(res.data.result);
            setToken(res.data.token);
        }
    };

    const signup = async (data) => {
        const res = await apiSignup(data);
        if (res.data) {
            setUser(res.data.result);
            setToken(res.data.token);
        }
    };

    const signout = async () => {
        // const res = await apiSignout();
        // if (res.data) {
        setUser(null);
        setToken("");
        // }
    };

    const getCurrentUser = async () => {
        const res = await apiGetCurrentUser();
        if (res.data) {
            setUser(res.data);
        }
    };

    return {user, signin, signup, signout, getCurrentUser};
};

export default useAuth;
