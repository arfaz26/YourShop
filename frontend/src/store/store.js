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
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "./reducers/user/userReducer";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderPayReducer,
} from "./reducers/order/orderReducer";
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
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(
    //
    applyMiddleware(thunk)
    //
  )
);
export default store;
