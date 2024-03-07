import {CLEAR_AUTH_TOKEN, SET_AUTH_TOKEN} from '../actiontypes/actionTypes';

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
