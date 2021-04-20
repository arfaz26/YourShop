import * as actionTypes from "../../constants/cartConstants";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cartItems: cartItemsFromStorage,
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CART_ADD_ITEM:
      const item = action.payload;
      const existsItem = state.cartItems.find(
        (x) => x.product === item.product
      );
      if (existsItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existsItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case actionTypes.CART_REMOVE_ITEM:
    default:
      return state;
  }
};
