import * as actionTypes from "../../constants/userConstants";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userInfo: userInfoFromStorage,
  loading: false,
};

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
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
