import { all, takeLatest } from 'redux-saga/effects';

import {
  onGetUserInformation,
} from './user';
import {
  getUserInformation,
} from '../../actions';

export default function* () {
  yield all([
    takeLatest(getUserInformation, onGetUserInformation),
  ]);
}
