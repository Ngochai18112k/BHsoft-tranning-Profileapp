export interface User {
    username: string;
    email: string;
    password: string;
    bio?: string;
    image?: string;
}

export enum UserActionTypes {
    LOGIN_REQUEST = "@@auth/LOGIN_REQUEST",
    LOGIN_SUCCESS = "@@auth/LOGIN_SUCCESS",
    LOGIN_FAIL = "@@auth/LOGIN_FAIL",
    REGISTER_REQUEST = "@@auth/REGISTER_REQUEST",
    REGISTER_SUCCESS = "@@auth/REGISTER_SUCCESS",
    REGISTER_FAIL = "@@auth/REGISTER_FAIL",
    LOGOUT = "@@auth/LOGOUT",
    UPDATE_REQUEST = "@@auth/UPDATE_REQUEST",
    UPDATE_SUCCESS = "@@auth/UPDATE_SUCCESS",
    UPDATE_FAIL = "@@auth/UPDATE_FAIL",
}

export interface UserState {
    readonly loading: boolean;
    readonly user: User[];
    readonly error?: string;
}
