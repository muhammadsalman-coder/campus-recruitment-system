import myReduce from "./reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(myReduce, applyMiddleware(thunk));

export default store;
