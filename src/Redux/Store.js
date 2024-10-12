import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {thunk} from "redux-thunk";
import {authReducer} from "./auth/reducer";
import {projectReducer} from "./project/reducer";
import {chatReducer} from "./chat/reducer";
import {commentReducer} from "./comment/reducer";
import {issueReducer} from "./issue/reducer";
import {subscriptionReducer} from "./subscription/reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    chat: chatReducer,
    comment: commentReducer,
    issue: issueReducer,
    subscription: subscriptionReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));