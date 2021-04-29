import axios from 'axios';
import * as actions from './Actions';

export const getContacts = () => (dispatch, getState) => {
  dispatch(actions.getContactsRequest());
  axios
    .get('http://localhost:3000/items/')
    .then(({ data }) => dispatch(actions.getContactsSuccess(data)))
    .catch(error => dispatch(actions.getContactsFailure(error.message)));
};

export const addContacts = payload => (dispatch, getState) => {
  dispatch(actions.addContactsRequest());
  axios
    .post('http://localhost:3000/items/', payload)
    .then(({ data }) => dispatch(actions.addContactsSuccess(data)))
    .catch(error => dispatch(actions.addContactsFailure(error.message)));
};
