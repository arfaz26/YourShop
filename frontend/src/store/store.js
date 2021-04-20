import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/product/productReducer";
import { productDetailReducer } from "./reducers/product/productDetail";
import { cartReducer } from "./reducers/cart/cartReducer";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
