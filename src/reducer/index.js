import { combineReducers } from "redux";
import commentReducer from "./commentReducer";
import authReducer from "./authReducer";

export  const rootReducer = combineReducers({
    comment:commentReducer,
    auth:authReducer
})