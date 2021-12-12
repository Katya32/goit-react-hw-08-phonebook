import { createReducer, combineReducers } from '@reduxjs/toolkit';
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

const token = createReducer('', {
  [signUpSuccess]: (_, action) => action.payload.token,
  [signInSuccess]: (_, action) => action.payload.token,
  [signOutSuccess]: () => '',
});
const user = createReducer(
  { name: '', email: '' },
  {
    [signUpSuccess]: (_, action) => action.payload.user,
    [signInSuccess]: (_, action) => action.payload.user,
    [signOutSuccess]: () => ({ name: '', email: '' }),
    [getCurrentUserSuccess]: (_, action) => action.payload,
  },
);

const error = createReducer('', {
  [signUpError]: (_, action) => action.payload,
  [signInError]: (_, action) => action.payload,
  [signOutError]: (_, action) => action.payload,
  [getCurrentUserError]: (_, action) => action.payload,
});

const loader = createReducer(false, {
  [signUpRequest]: () => true,
  [signUpSuccess]: () => false,
  [signUpError]: () => false,
  [signInRequest]: () => true,
  [signInSuccess]: () => false,
  [signInError]: () => false,
  [signOutRequest]: () => true,
  [signOutSuccess]: () => false,
  [signOutError]: () => false,
  [getCurrentUserRequest]: () => true,
  [getCurrentUserError]: () => true,
});

export const authReducer = combineReducers({
  user,
  token,
  loader,
  error,
});
