import React, {useEffect} from "react";
import {
    useRouteMatch,
    Route,
    Switch,
    Redirect,
    useHistory,
} from "react-router-dom";
import {useAppCtx} from "../../context/appContext";
import Form from "./Form";

const AuthPage = () => {
    const history = useHistory();
    const {path} = useRouteMatch();
    const {user, getCurrentUser} = useAppCtx();

    const paths = {
        signinPath: `${path}/signin`,
        signupPath: `${path}/signup`,
    };

    useEffect(() => {
        getCurrentUser();
    }, []);

    useEffect(() => {
        if (user) history.push("/task");
    }, [user]);

    return (
        <Switch>
            <Route exact path={paths.signinPath}>
                <Form isSignin={true} />
            </Route>
            <Route exact path={paths.signupPath}>
                <Form isSignin={false} />
            </Route>
            <Route exact path={path}>
                <Redirect to={paths.signinPath} />
            </Route>
        </Switch>
    );
};

export default AuthPage;
