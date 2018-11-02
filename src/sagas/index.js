import { all } from 'redux-saga/effects';

import user from './user';
import tasks from './tasks';

function* root() {
  yield all([
    user(),
    tasks(),
  ]);
}

export default root;
