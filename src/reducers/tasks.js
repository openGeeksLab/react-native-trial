import { createReducer } from 'redux-act';
import moment from 'moment';

import { setTasksList } from '../actions';

const initialState = {
  cacheTime: null,
  tasks: null,
};

export default createReducer({
  [setTasksList]: (state, payload) => ({
    ...state,
    cacheTime: moment(),
    tasks: payload,
  }),
}, initialState);
