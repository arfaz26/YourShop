import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/product/productReducer";
import { productDetailReducer } from "./reducers/product/productDetail";
import { cartReducer } from "./reducers/cart/cartReducer";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userDetailsReducer,
} from "./reducers/user/userReducer";
// import { userDetailsReducer } from "../store/reducers/user/userDetail";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetail: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

const store = createStore(
  rootReducer,
  // composeEnhancers(
  //
  applyMiddleware(thunk)
  //
  // )
);
export default store;
