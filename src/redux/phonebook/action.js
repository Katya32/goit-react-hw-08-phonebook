import { createAction } from '@reduxjs/toolkit';

export const addItemsActionCreatorRequest = createAction(
  'items/addItemsRequest',
);
export const addItemsActionCreatorSuccess = createAction(
  'items/addItemsSuccess',
);
export const addItemsActionCreatorError = createAction('items/addItemsError');

export const getItemsActionCreatorRequest = createAction(
  'items/getItemsRequest',
);
export const getItemsActionCreatorSuccess = createAction(
  'items/getItemsSuccess',
);
export const getItemsActionCreatorError = createAction('items/getItemsError');

export const deleteItemActionCreatorRequest = createAction(
  'items/deleteItemsRequest',
);
export const deleteItemActionCreatorSuccess = createAction(
  'items/deleteItemsSuccess',
);
export const deleteItemActionCreatorError = createAction(
  'items/deleteItemsError',
);

export const setFilterActionCreator = createAction('items/setFilter');
