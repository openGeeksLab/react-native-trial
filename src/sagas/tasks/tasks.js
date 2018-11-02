import { put, call } from 'redux-saga/effects';

import { setTasksList } from '../../actions';
import { api } from '../../utils';
import { TASKS_ENDPOINT } from '../../constants';

export function* onGetTasksList() {
  try {
    const result = yield call(api.get, TASKS_ENDPOINT);
    const { message, data } = result;
    if (message === 'Success') {
      yield put(setTasksList([...data]));
      console.log('result', data);
    } else {
      console.error('Erorr: Data retrived but message is: ', message);
    }
  } catch (error) {
    console.error('Erorr: ', error);
  }
}

export const git = '';
