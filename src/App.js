import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import AuthPage from "./components/auth";
import TaskPage from "./components/tasks";

import {useAppCtx} from "./context/appContext";
import AuthProvider from "./context/authContext";
import TaskProvider from "./context/taskContext";

const App = () => {
    const {user} = useAppCtx();

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
