import { createStore, applyMiddleware } from "redux";
import RootReducer from "./store/reducers";

export const store = createStore(RootReducer, applyMiddleware());
