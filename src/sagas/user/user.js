import { put, call } from 'redux-saga/effects';

import { setUserInformation } from '../../actions';
import { api } from '../../utils';
import { USER_ENDPOINT } from '../../constants';

export function* onGetUserInformation() {
  try {
    const result = yield call(api.get, USER_ENDPOINT);
    const { message, data } = result
    if (message === 'Success') {
      yield put(setUserInformation({ ...data }));
      console.log('result', data);
    } else {
      console.error('Erorr: Data retrived but message is: ', message);
    }
  } catch (error) {
    console.error('Erorr: ', error);
  }
}

export const git = '';
