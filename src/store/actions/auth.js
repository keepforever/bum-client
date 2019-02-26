import * as actionTypes from './actionTypes';

export const setAuthTrue = () => ({
  type: actionTypes.AUTH_SET_TRUE,
});

export const setAuthFalse = () => ({
  type: actionTypes.AUTH_SET_FALSE,
});
