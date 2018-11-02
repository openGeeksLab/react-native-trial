import { combineReducers } from 'redux';

import user from './user';
import tasks from './tasks';
import api from './api';

/* eslint no-param-reassign: 0 */
const combinedReducer = combineReducers({
  api,
  user,
  tasks,
});

const rootCombinedReducers = (state, action) => (
  combinedReducer(state, action)
);

export default rootCombinedReducers;
