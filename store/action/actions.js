import { CLEAR_AUTH_TOKEN, SET_AUTH_TOKEN } from "../actiontypes/actionTypes";


export const clearAuthToken = () => ({
  type: CLEAR_AUTH_TOKEN,
});


export const setAuthToken = token => ({
  type: SET_AUTH_TOKEN,
  payload: token,
});