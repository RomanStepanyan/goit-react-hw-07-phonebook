import { createAction } from '@reduxjs/toolkit';
// import { v4 as uuid } from 'uuid';

export const onAdd = createAction('ADD_CONTACT', text => ({
  payload: {
    // id: uuid(),
    name: text.name,
    number: text.number,
  },
}));
export const deleteContacts = createAction('DELETE_CONTACT');
export const onChange = createAction('FILTER_CONTACT');

export const getContactsRequest = createAction('GET_CONTACTS_REQUEST');
export const getContactsSuccess = createAction('GET_CONTACTS_SUCCESS');
export const getContactsFailure = createAction('GET_CONTACTS_FAILURE');

export const addContactsRequest = createAction('ADD_CONTACTS_REQUEST');
export const addContactsSuccess = createAction('ADD_CONTACTS_SUCCESS');
export const addContactsFailure = createAction('ADD_CONTACTS_FAILURE');

export const deleteContactsRequest = createAction('DELETE_CONTACTS_REQUEST');
export const deleteContactsSuccess = createAction('DELETE_CONTACTS_SUCCESS');
export const deleteContactsFailure = createAction('DELETE_CONTACTS_FAILURE');
