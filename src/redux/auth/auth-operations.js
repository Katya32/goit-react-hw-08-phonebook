import axios from 'axios';
import {
  getCurrentUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  signInError,
  signInRequest,
  signInSuccess,
  signOutError,
  signOutRequest,
  signOutSuccess,
  signUpError,
  signUpRequest,
  signUpSuccess,
} from './auth-action';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};
const signUpOperation = user => async (dispatch, getState) => {
  dispatch(signUpRequest());
  try {
    const { data } = await axios.post('/users/signup', user);
    console.log(data);
    dispatch(signUpSuccess(data));
    token.set(data.token);
  } catch (error) {
    dispatch(signUpError(error.message));
  }
};

const signInOperation = user => async (dispatch, getState) => {
  dispatch(signInRequest());
  try {
    const { data } = await axios.post('/users/login', user);
    dispatch(signInSuccess(data));
    token.set(data.token);
  } catch (error) {
    dispatch(signInError(error.message));
  }
};

const signOutOperation = () => async (dispatch, getState) => {
  dispatch(signOutRequest());
  try {
    await axios.post('/users/logout');
    dispatch(signOutSuccess());
    token.unset();
  } catch (error) {
    dispatch(signOutError());
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const state = getState();
  const persistedToken = state.auth.token;
  token.set(persistedToken);
  dispatch(getCurrentUserRequest());
  try {
    const { data } = await axios.get('/users/current');
    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(getCurrentUserError());
    console.log(error);
  }
};
export { signUpOperation, signInOperation, signOutOperation, getCurrentUser };
