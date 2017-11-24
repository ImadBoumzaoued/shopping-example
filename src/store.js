import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const middleware = [thunk];
import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
