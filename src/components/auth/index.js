import React from "react";
import {useRouteMatch, Route, Switch, Redirect} from "react-router-dom";
import Form from "./Form";

const AuthPage = () => {
    const {path} = useRouteMatch();

    const paths = {
        signinPath: `${path}/signin`,
        signupPath: `${path}/signup`,
    };

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
