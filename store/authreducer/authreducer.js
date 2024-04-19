import {CLEAR_AUTH_TOKEN, CLEAR_WORKOUT_PLAN, SET_AUTH_TOKEN, SET_WORKOUT_PLAN,SET_NUTRITION_PLAN} from '../actiontypes/actionTypes';
// authReducer.js

const initialState = {
  authToken: null,
  isAssessment: null,
  workoutPlan: null,
  nutritionplan:null,
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
    case SET_WORKOUT_PLAN: // Handle setting the workout plan
    return {
      ...state,
      workoutPlan: action.payload,
    };
  case CLEAR_WORKOUT_PLAN: // Handle clearing the workout plan
    return {
      ...state,
      workoutPlan: null,
    };
    case SET_NUTRITION_PLAN: // Handle clearing the workout plan
    return {
      ...state,
      nutritionplan: action.payload,
    };

    
    default:
      return state;
  }
};

export default authReducer;
