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
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
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

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_CREATE_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.PRODUCT_CREATE_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        success: true,
      };
    case actionTypes.PRODUCT_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.PRODUCT_UPDATE_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        success: true,
      };
    case actionTypes.PRODUCT_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.PRODUCT_UPDATE_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};

export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_CREATE_REVIEW_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.PRODUCT_CREATE_REVIEW_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case actionTypes.PRODUCT_CREATE_REVIEW_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_TOP_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actionTypes.PRODUCT_TOP_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case actionTypes.PRODUCT_TOP_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
