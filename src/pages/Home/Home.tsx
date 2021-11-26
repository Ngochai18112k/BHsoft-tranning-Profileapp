import React from "react";
import "./home.css";
import Header from "../../components/Header/Header";
import Profile from "../../components/Profile/Profile";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import EditProfile from "../../components/Profile/EditProfile";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Profile} />
                    <Route path="/edit" component={EditProfile} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Home;
