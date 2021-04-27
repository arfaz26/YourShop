import * as actionTypes from "../../constants/userConstants";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userInfo: userInfoFromStorage,
  loading: false,
  error: null,
  success: false,
};

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };
    case actionTypes.USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case actionTypes.USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };
    case actionTypes.USER_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      };
    case actionTypes.USER_UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
        success: true,
      };
    case actionTypes.USER_UPDATE_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.USER_DETAILS_RESET:
      return { userInfo: {} };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.USER_DETAILS_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case actionTypes.USER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case actionTypes.USER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.USER_LIST_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case actionTypes.USER_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.USER_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};
