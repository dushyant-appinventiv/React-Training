import { createStore, applyMiddleware, compose } from "redux";
import dataReducer from "./modules/Assignment11/MainScreen/reducer";
import thunk from "redux-thunk";

const enhancer = compose(applyMiddleware(thunk));

export const store = createStore(dataReducer, enhancer);
