import { combineReducers } from "redux";
import addOrSubtractNumber from "./addSub";

// holds list of all the reducers
const rootReducer = combineReducers({
    addOrSubtractNumber
})

export default rootReducer;