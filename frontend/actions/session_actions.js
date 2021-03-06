import * as SessionApiUtil from '../util/session_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT = "LOGOUT";

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const login = (user) => (dispatch) => {
  return SessionApiUtil.login(user)
    .then((data) => dispatch(receiveCurrentUser(data)),
      data => dispatch(receiveErrors(data.responseJSON.errors)));
};

export const signup = (user) => (dispatch) => {
  return SessionApiUtil.signup(user)
    .then((data) => dispatch(receiveCurrentUser(data)),
      data => dispatch(receiveErrors(data.responseJSON.errors)));
};

export const logout = () => (dispatch) => {
  return SessionApiUtil.logout()
    .then((data) => dispatch({
      type: LOGOUT
    }));
};
