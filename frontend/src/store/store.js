import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const reducer = combineReducers({
  product: productReducer,
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
