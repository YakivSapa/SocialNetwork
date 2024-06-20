import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
// @ts-ignore
import profileReducer from "./profileReducer.ts";
// @ts-ignore
import dialogsReducer from "./dialogsReducer.ts";
// @ts-ignore
import sidebarReducer from "./sidebarReducer.ts";
// @ts-ignore
import usersReducer from "./usersReducer.ts";
// @ts-ignore
import authReducer from "./authReducer.ts";
import { thunk as thunkMiddleware } from "redux-thunk";
import { reducer as formReducer } from "redux-form";
// @ts-ignore
import appReducer from "./appReducer.ts";
import { compose } from "redux";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
// @ts-ignore
window.__store__ = store;

export default store;