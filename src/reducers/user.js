import { createReducer } from 'redux-act';
import moment from 'moment';

import { setUserInformation } from '../actions';

const initialState = {
  cacheTime: null,
  user: null,
};

export default createReducer({
  [setUserInformation]: (state, payload) => ({
    ...state,
    cacheTime: moment(),
    user: {
      ...payload,
    },
  }),
}, initialState);
