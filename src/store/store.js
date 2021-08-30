import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const combinedReducers = combineReducers(
  reducers,
);

export const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
