import React, { useEffect, useState } from "react";
import { Alert, Toast } from "react-bootstrap";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { register } from "../../redux/user/actions";
import "./auth.css";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const [showToast, setShowToast] = useState(false);
    const toggleShowToast = () => setShowToast(!showToast);

    const dispatch = useDispatch();

    const userRegister = useSelector((state: RootStateOrAny) => state.register);
    const { loading, user, error } = userRegister;

    let history = useHistory();

    useEffect(() => {
        if (user) {
            history.replace("/");
        }
    }, [history, user]);

    const submitHandler = (e: any) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Password don't match");
        } else {
            dispatch(register(username, email, password));
        }
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
                        <form
                            className="loginBox register"
                            onSubmit={submitHandler}
                        >
                            <input
                                placeholder="Username"
                                className="loginInput"
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
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
                            <input
                                placeholder="Password Again"
                                className="loginInput"
                                type="password"
                                required
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                            {message !== "" && (
                                <Alert variant="danger">{message}</Alert>
                            )}
                            {error && <Alert variant="danger">{error}</Alert>}
                            <button className="loginButton" type="submit">
                                {loading ? (
                                    <i className="fa fa-spinner fa-spin" />
                                ) : (
                                    "Sign Up"
                                )}
                            </button>
                            <Link
                                to="/login"
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    textDecoration: "none",
                                    justifyContent: "center",
                                }}
                            >
                                <button className="loginRegisterButton">
                                    Log into Account
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
