import axios from "axios";
import * as actionTypes from "../../constants/cartConstants";

export const addToCart = (id, qty) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: actionTypes.CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        quantity: qty,
      },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
};
