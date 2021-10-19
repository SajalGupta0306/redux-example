import { createStore } from "redux";
import reducer from "../reducer/index";

// creating a store to hold all the reducers which has the latest state
// second parameter to reflect the store in the dev tools
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;