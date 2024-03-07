import {CLEAR_AUTH_TOKEN, SET_AUTH_TOKEN} from '../actiontypes/actionTypes';
// authReducer.js

const initialState = {
  authToken: null,
  isAssessment: null,
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
    case 'IS_ASSESSMENT': {
      console.log('action IS_ASSESSMENT', action.res);
      return {
        ...state,
        isAssessment: action.res,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
