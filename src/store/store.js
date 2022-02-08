import { createStore, applyMiddleware } from "redux";
// import reducer from "./reducers/langred";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers/combinered";
import thunk from "redux-thunk";
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
