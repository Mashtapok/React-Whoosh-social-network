import {applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form'
import profileReducer from "./profile/profile-reducer.js";
import dialogsReducer from "./dialogs/dialogs-reducer";
import usersReducer from "./users/users-reducer";
import authReducer from "./authorization/auth-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";
import newsReducer from "./news/news-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    news: newsReducer,
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;