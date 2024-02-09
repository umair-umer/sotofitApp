
import { CLEAR_AUTH_TOKEN, SET_ASSESMENT_Bol, SET_AUTH_TOKEN } from "../actiontypes/actionTypes";
// authReducer.js


const initialState = {
  authToken: null,
  assisment:false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.payload,
      };
      case CLEAR_AUTH_TOKEN:
        return {
          ...state,
          authToken: null, // Clear the token
        };
        case SET_ASSESMENT_Bol:
          return {
            ...state,
            assisment:false , 
          };
    default:
      return state;
  }
};

export default authReducer;
