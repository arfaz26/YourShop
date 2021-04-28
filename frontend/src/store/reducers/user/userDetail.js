// import * as actionTypes from "../../constants/userConstants";

// const initialState = {
//   loading: false,
//   error: null,
//   user: {},
// };

// export const userDetailsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.USER_DETAILS_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case actionTypes.USER_DETAILS_SUCCESS:
//       return {
//         ...state,
//         user: action.payload,
//         loading: false,
//       };
//     case actionTypes.USER_DETAILS_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };
