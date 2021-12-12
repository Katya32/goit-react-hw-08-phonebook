import { combineReducers } from 'redux';
import { authReducer } from './auth/auth-reducer';
import contactsReducer from './phonebook/reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
});
export default rootReducer;
