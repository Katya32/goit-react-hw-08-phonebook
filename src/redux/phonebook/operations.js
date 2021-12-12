import axios from 'axios';
import {
  getItemsActionCreatorRequest,
  getItemsActionCreatorSuccess,
  getItemsActionCreatorError,
  addItemsActionCreatorRequest,
  addItemsActionCreatorError,
  deleteItemActionCreatorRequest,
  deleteItemActionCreatorError,
  addItemsActionCreatorSuccess,
  deleteItemActionCreatorSuccess,
} from './action';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContactsApi = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};
export const setContactsApi = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};
export const deleteContactsApi = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

export const getContactsOperation = () => async (dispatch, getState) => {
  dispatch(getItemsActionCreatorRequest());
  try {
    const contacts = await getContactsApi();
    dispatch(getItemsActionCreatorSuccess(contacts));
  } catch (error) {
    dispatch(getItemsActionCreatorError());
  }
};
export const addContactOperation = contact => async (dispatch, getState) => {
  dispatch(addItemsActionCreatorRequest());
  try {
    const data = await setContactsApi(contact);
    dispatch(addItemsActionCreatorSuccess(data));
  } catch (error) {
    dispatch(addItemsActionCreatorError());
  }
};
export const deleteContactOperation = id => async (dispatch, getState) => {
  dispatch(deleteItemActionCreatorRequest());
  try {
    await deleteContactsApi(id);
    dispatch(deleteItemActionCreatorSuccess(id));
  } catch (error) {
    dispatch(deleteItemActionCreatorError());
  }
};
