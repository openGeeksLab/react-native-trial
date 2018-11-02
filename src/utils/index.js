import moment from 'moment';

import { CACHE_TIME_THRESHOLD } from '../constants';

import * as api from './api';

const checkNeedUpdateCache = (lastCacheTime) => {
  if (lastCacheTime) {
    const cacheThreshHold = moment().subtract(CACHE_TIME_THRESHOLD, 'minutes');
    return moment(lastCacheTime).isBefore(cacheThreshHold);
  }
  return true;
};

export {
  api,
  checkNeedUpdateCache,
};
