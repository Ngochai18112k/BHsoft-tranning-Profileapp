import { Reducer } from "redux";
import { UserActionTypes, UserState } from "./types";

export const initialUserState: UserState = {
    user: localStorage.getItem("userBHsoft")
        ? JSON.parse(localStorage.getItem("userBHsoft")!)
        : null,
    error: undefined,
    loading: false,
};

export const loginReducer: Reducer<UserState> = (
    state = initialUserState,
    action
) => {
    switch (action.type) {
        case UserActionTypes.LOGIN_REQUEST: {
            return { ...state, loading: true };
        }
        case UserActionTypes.LOGIN_SUCCESS: {
            return { ...state, loading: false, user: action.payload };
        }
        case UserActionTypes.LOGIN_FAIL: {
            return { ...state, loading: false, error: action.payload };
        }
        case UserActionTypes.LOGOUT: {
            return { ...state };
        }
        default: {
            return state;
        }
    }
};

export const registerReducer: Reducer<UserState> = (
    state = initialUserState,
    action
) => {
    switch (action.type) {
        case UserActionTypes.REGISTER_REQUEST: {
            return { ...state, loading: true };
        }
        case UserActionTypes.REGISTER_SUCCESS: {
            return { ...state, loading: false, user: action.payload };
        }
        case UserActionTypes.REGISTER_FAIL: {
            return { ...state, loading: false, error: action.payload };
        }
        case UserActionTypes.LOGOUT: {
            return { ...state };
        }
        default: {
            return state;
        }
    }
};

export const updateUserReducer: Reducer<UserState> = (
    state = initialUserState,
    action
) => {
    switch (action.type) {
        case UserActionTypes.UPDATE_REQUEST: {
            return { ...state, loading: true };
        }
        case UserActionTypes.UPDATE_SUCCESS: {
            return { ...state, loading: false, user: action.payload };
        }
        case UserActionTypes.UPDATE_FAIL: {
            return { ...state, loading: false, error: action.payload };
        }
        default: {
            return state;
        }
    }
};
