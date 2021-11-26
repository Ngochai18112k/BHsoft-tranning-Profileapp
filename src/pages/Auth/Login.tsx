import React, { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import InputForm from "../../components/InputForm/InputForm";
import { login } from "../../redux/user/actions";
import "./auth.css";

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    interface valuesInput {
        id: number;
        name: string;
        type: string;
        placeholder: string;
        errorMessage: string;
        pattern?: string;
        required: boolean;
    }

    const inputs: Array<valuesInput> = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Password should be 6-20 characters and include at least 1 letter, 1 number and 1 special character!",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
            required: true,
        },
    ];

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

    const onChange = (e: any) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const submitHandler = (e: any) => {
        e.preventDefault();
        dispatch(login(values.email, values.password));
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
                            {inputs.map((input) => (
                                <InputForm
                                    key={input.id}
                                    {...input}
                                    value={(values as any)[input.name]}
                                    onChange={onChange}
                                />
                            ))}
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
