import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import RootReducer from "./Reducers/RootReducer";

const middleware = [thunk];

const makeStore = () =>
  createStore(RootReducer, compose(applyMiddleware(...middleware)));
//const store = createStore(rootReducer, compose(applyMiddleware(...middleware)))

export  const wrapper = createWrapper(makeStore);
