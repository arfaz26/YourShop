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
