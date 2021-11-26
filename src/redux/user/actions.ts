import axios from "axios";
import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ApplicationState } from "../store";
import { UserActionTypes } from "./types";

export type AppThunk = ActionCreator<
    ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const login: AppThunk = (email: string, password: string) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: UserActionTypes.LOGIN_REQUEST,
            });

            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const { data } = await axios.post(
                "https://api.realworld.io/api/users/login",
                {
                    user: { email, password },
                },
                config
            );

            dispatch({
                type: UserActionTypes.LOGIN_SUCCESS,
                payload: data,
            });

            localStorage.setItem("userBHsoft", JSON.stringify(data));
            document.location.href = "/";
        } catch (error: any) {
            dispatch({
                type: UserActionTypes.LOGIN_FAIL,
                payload:
                    error.response && error.response.data.errors
                        ? "Email or password is invalid"
                        : error.errors,
            });
        }
    };
};

export const logout: AppThunk = () => {
    return (dispatch: Dispatch) => {
        localStorage.removeItem("userBHsoft");

        dispatch({ type: UserActionTypes.LOGOUT });

        document.location.href = "/login";
    };
};

export const register: AppThunk = (
    username: string,
    email: string,
    password: string
) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: UserActionTypes.REGISTER_REQUEST,
            });

            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const { data } = await axios.post(
                "https://api.realworld.io/api/users",
                {
                    user: { username, email, password },
                },
                config
            );

            dispatch({
                type: UserActionTypes.REGISTER_SUCCESS,
                payload: data,
            });

            localStorage.setItem("userBHsoft", JSON.stringify(data));
            document.location.href = "/";
        } catch (error: any) {
            dispatch({
                type: UserActionTypes.REGISTER_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };
};

export const updateUser: AppThunk = (user) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: UserActionTypes.UPDATE_REQUEST,
            });

            const userInfo = JSON.parse(localStorage.getItem("userBHsoft")!);

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userInfo.user.token}`,
                },
            };

            const { data } = await axios.put(
                "https://api.realworld.io/api/user",
                { user },
                config
            );

            dispatch({
                type: UserActionTypes.UPDATE_SUCCESS,
                payload: data,
            });

            localStorage.setItem("userBHsoft", JSON.stringify(data));
            document.location.href = "/";
        } catch (error: any) {
            dispatch({
                type: UserActionTypes.UPDATE_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };
};
