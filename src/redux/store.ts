import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";
import {
    loginReducer,
    registerReducer,
    updateUserReducer,
} from "./user/reducers";
import { UserState } from "./user/types";

export interface ApplicationState {
    login: UserState;
    register: UserState;
}

const createRootReducer = () =>
    combineReducers({
        login: loginReducer,
        register: registerReducer,
        updateUser: updateUserReducer,
    });

export default function configureStore(
    initialState: ApplicationState
): Store<ApplicationState> {
    const store = createStore(
        createRootReducer(),
        initialState,
        applyMiddleware(thunk)
    );
    return store;
}
