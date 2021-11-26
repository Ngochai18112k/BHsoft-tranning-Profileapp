import React, { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { login } from "../../redux/user/actions";
import "./auth.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showToast, setShowToast] = useState(false);
    const toggleShowToast = () => setShowToast(!showToast);

    const dispatch = useDispatch();

    const userLogin = useSelector((state: RootStateOrAny) => state.login);
    const { loading, user, error } = userLogin;

    let history = useHistory();

    useEffect(() => {
        if (user) {
            history.push("/");
        }
    }, [history, user]);

    const submitHandler = (e: any) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    return (
        <>
            <Toast
                className="noti"
                onClose={toggleShowToast}
                show={error ? true : false}
                delay={1000}
                autohide
            >
                <Toast.Header>
                    <strong className="me-auto">Error</strong>
                </Toast.Header>
                <Toast.Body>{error}</Toast.Body>
            </Toast>
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">BHSoft Profile</h3>
                        <span className="loginDesc">Enjoy in the moment</span>
                    </div>
                    <div className="loginRight">
                        <form className="loginBox" onSubmit={submitHandler}>
                            <input
                                placeholder="Email"
                                className="loginInput"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                placeholder="Password"
                                className="loginInput"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className="loginButton" type="submit">
                                {loading ? (
                                    <i className="fa fa-spinner fa-spin" />
                                ) : (
                                    "Log In"
                                )}
                            </button>
                            <Link
                                to="/register"
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    textDecoration: "none",
                                    justifyContent: "center",
                                }}
                            >
                                <button className="loginRegisterButton">
                                    Create a New Account
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
