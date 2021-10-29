import React, {useEffect} from "react";
import {Route, Switch, Redirect, useHistory} from "react-router-dom";
import AuthPage from "./components/auth";
import TaskPage from "./components/tasks";

import {useAppCtx} from "./context/appContext";
import AuthProvider from "./context/authContext";
import TaskProvider from "./context/taskContext";

const App = () => {
    const history = useHistory();
    const {user, getCurrentUser} = useAppCtx();

    useEffect(() => {
        getCurrentUser();
    }, []);

    useEffect(() => {
        if (user) history.push("/task");
    }, [user]);

    return (
        <Switch>
            <Route path='/auth'>
                <AuthProvider>
                    <AuthPage />
                </AuthProvider>
            </Route>
            <Route path='/task'>
                {user ? (
                    <TaskProvider>
                        <TaskPage />
                    </TaskProvider>
                ) : (
                    <Redirect to='/' />
                )}
            </Route>
            <Route path='/' component={() => <Redirect to='auth' />} />
        </Switch>
    );
};

export default App;
