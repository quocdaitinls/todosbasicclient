import {useState} from "react";
import {
    apiGetCurrentUser,
    apiSignin,
    apiSignout,
    apiSignup,
} from "../apis/auth";

const useAuth = () => {
    const [user, setUser] = useState();

    const signin = async (data) => {
        const res = await apiSignin(data);
        if (res.data) {
            setUser(res.data);
        }
    };

    const signup = async (data) => {
        const res = await apiSignup(data);
        if (res.data) {
            setUser(res.data);
        }
    };

    const signout = async () => {
        const res = await apiSignout();
        if (res.data) {
            setUser(null);
        }
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
