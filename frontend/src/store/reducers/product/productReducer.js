import * as actionTypes from "../../constants/productConstants";
const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case actionTypes.PRODUCT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_DELETE_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.PRODUCT_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case actionTypes.PRODUCT_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
