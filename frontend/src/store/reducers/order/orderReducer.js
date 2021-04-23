import * as actionTypes from "../../constants/orderConstants";
const initialState = {
  loading: false,
  success: false,
  error: null,
};

export const orderCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ORDER_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionTypes.ORDER_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        order: action.payload,
      };

    case actionTypes.ORDER_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case actionTypes.ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionTypes.ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
      };

    case actionTypes.ORDER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ORDER_PAY_REQUEST:
      return {
        loading: true,
        // error: null,
        // success: false,
      };

    case actionTypes.ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case actionTypes.ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case actionTypes.ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};
