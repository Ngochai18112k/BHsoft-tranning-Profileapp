import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/Home";

function App() {
    const user = useSelector((state: RootStateOrAny) => state.login.user);

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {user ? <Home /> : <Redirect to="/login" />}
                </Route>
                <Route path="/login">
                    {!user ? <Login /> : <Redirect to="/" />}
                </Route>
                <Route path="/register">
                    {!user ? <Register /> : <Redirect to="/" />}
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
