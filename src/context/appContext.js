import React, {useContext} from "react";
import useAuth from "../hooks/useAuth";

const AppContext = React.createContext();

export const useAppCtx = () => {
    return useContext(AppContext);
};

const AppProvider = (props) => {
    const {user, signin, signup, signout, getCurrentUser} = useAuth();

    const value = {user, signin, signup, signout, getCurrentUser};
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppProvider;
