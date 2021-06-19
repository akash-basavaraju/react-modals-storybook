import { createStore, combineReducers } from "redux";
import reducer from "./reducer";

const store = createStore(
  combineReducers({
    modalReducer: reducer,
  })
);

export default store;
