import { all, takeLatest } from 'redux-saga/effects';

import {
  onGetTasksList,
} from './tasks';
import {
  getTasksList,
} from '../../actions';

export default function* () {
  yield all([
    takeLatest(getTasksList, onGetTasksList),
  ]);
}
