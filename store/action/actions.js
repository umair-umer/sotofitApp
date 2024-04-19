import {CLEAR_AUTH_TOKEN, CLEAR_WORKOUT_PLAN, SET_AUTH_TOKEN, SET_WORKOUT_PLAN,SET_NUTRITION_PLAN} from '../actiontypes/actionTypes';
export const clearAuthToken = () => ({
  type: CLEAR_AUTH_TOKEN,
});

export const setIsAssessment = res => {
  // console.log('setIsAssessment action---->', res);
  return {
    type: 'IS_ASSESSMENT',
    res,
  };
};

export const setAuthToken = token => ({
  type: SET_AUTH_TOKEN,
  payload: token,
});

export const setWorkoutPlan = (workoutPlan) => ({
  type: SET_WORKOUT_PLAN,
  payload: workoutPlan,
});

export const setNutritionplan = (nutritionplan) => ({
  type: SET_NUTRITION_PLAN,
  payload: nutritionplan,
});

export const clearWorkoutPlan = () => ({
  type: CLEAR_WORKOUT_PLAN,
});