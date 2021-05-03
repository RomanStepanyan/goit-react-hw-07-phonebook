import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  isLoading: false,
  items: [],
  error: '',
};

const error = createReducer(INITIAL_STATE.error, {
  GET_CONTACTS_FAILURE: (state, { payload }) => {
    return payload;
  },
  ADD_CONTACTS_FAILURE: (_, { payload }) => {
    return payload;
  },
});

const isLoading = createReducer(INITIAL_STATE.isLoading, {
  GET_CONTACTS_REQUEST: () => {
    return true;
  },
  GET_CONTACTS_SUCCESS: () => {
    return false;
  },
  GET_CONTACTS_FAILURE: () => {
    return false;
  },
});

const items = createReducer(INITIAL_STATE.items, {
  GET_CONTACTS_SUCCESS: (_, { payload }) => {
    return payload;
  },
  ADD_CONTACT: (state, { payload }) => {
    const isNotUniqueContact = state.some(item => item.name === payload.name);
    if (isNotUniqueContact) {
      alert('Contact is already exist');
      return state;
    }
    return [...state, payload];

    // if (!isNotUniqueContact) {
    //   return [...state, payload];
    // } else {
    //   alert('Contact is already exist');
    //   return state;
    // }
  },
  DELETE_CONTACT: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const filter = createReducer('', {
  FILTER_CONTACT: (_, { payload }) => payload,
});

export default combineReducers({
  isLoading,
  items,
  filter,
  error,
});
