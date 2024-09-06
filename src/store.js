import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
} from "redux";
import { thunk } from "redux-thunk";
import reducer from "./redux/reducer/reducer";

const initialState = {};

const middlewares = [thunk];

const composeEnhancers = compose(applyMiddleware(...middlewares));

const store = createStore(
  reducer, 
  initialState, 
  composeEnhancers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
